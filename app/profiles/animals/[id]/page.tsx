import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimalHealthSection } from "@/components/animal-health-section";
import { WeightChart } from "@/components/weight-chart";
import { SAMPLE_FARMER } from "@/lib/profiles";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Animal Profile - Livestock Management",
  description: "View detailed animal profile with medical history and health records",
};

interface AnimalDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AnimalDetailPage({
  params,
}: AnimalDetailPageProps) {
  const { id } = await params;
  const animal = SAMPLE_FARMER.animals.find((a) => a.id === id);

  if (!animal) {
    notFound();
  }

  const currentWeight = animal.weightHistory[animal.weightHistory.length - 1]?.weight;
  const age = new Date().getFullYear() - animal.dateOfBirth.getFullYear();

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/profiles/animals">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Animals
          </Button>
        </Link>

        {/* Animal Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">
                    {animal.name}
                  </h1>
                  <p className="text-lg text-muted-foreground capitalize">
                    {animal.breed} {animal.type}
                  </p>
                </div>
                <span className="bg-primary/20 text-primary px-4 py-2 rounded-lg font-semibold capitalize">
                  {animal.type}
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date of Birth
                    </p>
                    <p className="font-semibold text-foreground">
                      {animal.dateOfBirth.toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Age</p>
                    <p className="font-semibold text-foreground">
                      {age} year{age !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Gender
                    </p>
                    <p className="font-semibold text-foreground capitalize">
                      {animal.gender}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Current Weight
                    </p>
                    <p className="font-semibold text-foreground text-primary">
                      {currentWeight} kg
                    </p>
                  </div>
                </div>

                {animal.notes && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Notes</p>
                    <p className="text-foreground">{animal.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Weight History Chart */}
        <div className="mb-12">
          <WeightChart data={animal.weightHistory} animalName={animal.name} />
        </div>

        {/* Health Section */}
        <AnimalHealthSection
          medicalRecords={animal.medicalRecords}
          vaccinations={animal.vaccinations}
        />

        {/* Care Guide Link */}
        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">
            Learn More About {animal.type === 'cow' ? 'Cattle' : animal.type === 'sheep' ? 'Sheep' : 'Goat'} Care
          </h3>
          <p className="text-muted-foreground mb-4">
            Access comprehensive care guides with step-by-step instructions for proper livestock management.
          </p>
          <Link href={`/guide/${animal.type}`}>
            <Button>View Care Guide</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
