import { AnimalSelector } from "@/components/animal-selector";
import { ANIMALS } from "@/lib/guides";

export const metadata = {
  title: "Livestock Management - Animal Selection",
  description: "Select an animal type to begin managing your livestock",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Livestock Management
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional care guidance for your animals. Select an animal type to get started with step-by-step management instructions.
          </p>
        </div>

        <AnimalSelector animals={ANIMALS} />
      </div>
    </main>
  );
}
