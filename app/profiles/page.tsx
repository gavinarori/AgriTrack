import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users,  } from "lucide-react";
import { SAMPLE_FARMER } from "@/lib/profiles";

export const metadata = {
  title: "Profiles - Livestock Management",
  description: "View farmer profile and animal profiles with health history",
};

export default function ProfilesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Profiles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            View comprehensive profiles including farmer information and detailed
            animal health history, medical records, vaccinations, and weight tracking.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Farmer Profile Card */}
          <Link href="/profiles/farmer">
            <Card className="h-full hover:border-primary/50 hover:bg-secondary/50 transition-all cursor-pointer">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Farmer Profile
                    </h3>
                    <p className="text-muted-foreground">
                      {SAMPLE_FARMER.name}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-primary flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  View detailed farm information, contact details, and management
                  overview.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Animals List Card */}
          <Link href="/profiles/animals">
            <Card className="h-full hover:border-primary/50 hover:bg-secondary/50 transition-all cursor-pointer">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Animal Profiles
                    </h3>
                    <p className="text-muted-foreground">
                      {SAMPLE_FARMER.totalAnimals} Animals
                    </p>
                  </div>
               
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Browse all animals with their complete health records and
                  medical history.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  View Animals
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Animals Overview */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Recent Animals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SAMPLE_FARMER.animals.slice(0, 3).map((animal) => (
              <Link key={animal.id} href={`/profiles/animals/${animal.id}`}>
                <Card className="h-full hover:border-primary/50 hover:bg-secondary/50 transition-all cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-foreground mb-1">
                          {animal.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {animal.breed} {animal.type}
                        </p>
                      </div>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {animal.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Current Weight: <span className="font-semibold text-foreground">{animal.weightHistory[animal.weightHistory.length - 1]?.weight} kg</span>
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
