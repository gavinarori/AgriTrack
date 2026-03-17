import { getAnimalGuide, ANIMALS } from "@/lib/guides";
import { StepGuide } from "@/components/step-guide";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    animal: string;
  }>;
}

export async function generateStaticParams() {
  return ANIMALS.map((animal) => ({
    animal: animal.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { animal } = await params;
  const guide = getAnimalGuide(animal);

  if (!guide) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${guide.name} Management Guide`,
    description: `Step-by-step guide for managing your ${guide.name.toLowerCase()}`,
  };
}

export default async function GuidePage({ params }: Props) {
  const { animal } = await params;
  const guide = getAnimalGuide(animal);

  if (!guide) {
    notFound();
  }


  const stepImageMap: Record<string, string> = {
    "add-animal": `/kid-feeding-black-cow.jpg`,
    "weight-history": `/why-weighing-your-livestock-is-crucial-for-animal.webp`,
    "vaccination-history": `/veterinarian-doctor-with-tablet-holding-thumbs-up-pigpen-pig-farm.jpg`,
    "health-notes": `/veterinarian-animal-doctor-cattle-farm-checking-health-cows.jpg`,

  };

  return (
    <StepGuide
      animalName={guide.name}
      steps={guide.steps}
      stepImages={stepImageMap}
    />
  );
}
