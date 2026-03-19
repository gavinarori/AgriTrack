import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FarmerProfileCard } from "@/components/farmer-profile-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SAMPLE_FARMER } from "@/lib/profiles";
import { ArrowLeft, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Farmer Profile - Livestock Management",
  description: "View farmer profile and farm information",
};

export default function FarmerProfilePage() {
  const cowCount = SAMPLE_FARMER.animals.filter(
    (a) => a.type === "cow"
  ).length;
  const sheepCount = SAMPLE_FARMER.animals.filter(
    (a) => a.type === "sheep"
  ).length;
  const goatCount = SAMPLE_FARMER.animals.filter(
    (a) => a.type === "goat"
  ).length;

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/profiles">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profiles
          </Button>
        </Link>

        {/* Farmer Profile Card */}
        <FarmerProfileCard farmer={SAMPLE_FARMER} />

        {/* Animal Statistics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Animal Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Cattle (Cows)
                    </p>
                    <p className="text-3xl font-bold text-primary">{cowCount}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-accent opacity-50" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Sheep</p>
                    <p className="text-3xl font-bold text-primary">
                      {sheepCount}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-accent opacity-50" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Goats</p>
                    <p className="text-3xl font-bold text-primary">
                      {goatCount}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-accent opacity-50" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Animals List */}
          <h2 className="text-2xl font-bold text-foreground mb-6">Animals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SAMPLE_FARMER.animals.map((animal) => (
              <Link key={animal.id} href={`/profiles/animals/${animal.id}`}>
                <Card className="h-full hover:border-primary/50 hover:bg-secondary/50 transition-all cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-foreground mb-1">
                          {animal.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {animal.breed} • {animal.gender}
                        </p>
                      </div>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full capitalize">
                        {animal.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Birth</p>
                        <p className="font-medium">
                          {animal.dateOfBirth.toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Current Weight</p>
                        <p className="font-medium">
                          {
                            animal.weightHistory[
                              animal.weightHistory.length - 1
                            ]?.weight
                          }{" "}
                          kg
                        </p>
                      </div>
                    </div>
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
