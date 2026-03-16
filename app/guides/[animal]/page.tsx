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

  // Map animal steps to image paths
  const stepImageMap: Record<string, string> = {
    "add-animal": `/images/step-add-animal.jpg`,
    "weight-history": `/images/step-weight-history.jpg`,
    "vaccination-history": `/images/step-vaccination.jpg`,
    "health-notes": `/images/step-health-notes.jpg`,
    "mark-for-sale": `/images/step-sale.jpg`,
  };

  return (
    <StepGuide
      animalName={guide.name}
      steps={guide.steps}
      stepImages={stepImageMap}
    />
  );
}
