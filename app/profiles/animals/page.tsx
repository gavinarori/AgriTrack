import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SAMPLE_FARMER } from "@/lib/profiles";
import { ArrowLeft, Heart, Syringe } from "lucide-react";

export const metadata = {
  title: "Animal Profiles - Livestock Management",
  description: "View all animal profiles with health records",
};

export default function AnimalsListPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/profiles">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profiles
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Animal Profiles
          </h1>
          <p className="text-lg text-muted-foreground">
            {SAMPLE_FARMER.totalAnimals} animals in {SAMPLE_FARMER.farmName}
          </p>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_FARMER.animals.map((animal) => {
            const currentWeight =
              animal.weightHistory[animal.weightHistory.length - 1]?.weight;
            const medicalCount = animal.medicalRecords.length;
            const vaccineCount = animal.vaccinations.length;

            return (
              <Link key={animal.id} href={`/profiles/animals/${animal.id}`}>
                <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer overflow-hidden">
                  {/* Animal Image */}
                  <div className="relative h-48 w-full bg-muted overflow-hidden">
                    <Image
                      src={animal.image}
                      alt={animal.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-sm font-semibold text-primary capitalize">
                        {animal.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {animal.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {animal.breed} • {animal.gender}
                      </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Birth Date</span>
                        <span className="font-medium">
                          {animal.dateOfBirth.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Current Weight
                        </span>
                        <span className="font-medium text-primary">
                          {currentWeight} kg
                        </span>
                      </div>
                    </div>

                    {/* Health Summary */}
                    <div className="grid grid-cols-2 gap-2 mb-6 bg-secondary/30 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-accent" />
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Medical
                          </p>
                          <p className="font-semibold text-foreground">
                            {medicalCount}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Syringe className="w-4 h-4 text-accent" />
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Vaccines
                          </p>
                          <p className="font-semibold text-foreground">
                            {vaccineCount}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      View Full Profile
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
