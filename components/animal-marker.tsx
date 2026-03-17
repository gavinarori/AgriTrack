"use client";

import Image from "next/image";
import { PaddockAnimal } from "@/lib/paddocks";

interface AnimalMarkerProps {
  animal: PaddockAnimal;
  isDragging?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, animal: PaddockAnimal) => void;
}

export function AnimalMarker({
  animal,
  isDragging,
  onDragStart,
}: AnimalMarkerProps) {
  const typeColors: Record<string, string> = {
    cow: "ring-blue-500",
    sheep: "ring-purple-500",
    goat: "ring-amber-500",
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart?.(e, animal)}
      className={`
        cursor-grab active:cursor-grabbing
        rounded-lg overflow-hidden border-2 border-border
        transition-all duration-200 hover:shadow-lg
        ring-2 ${typeColors[animal.animalType]}
        ${isDragging ? "opacity-50" : ""}
      `}
    >
      <div className="relative h-20 w-20 bg-muted">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover"
          sizes="5rem"
        />
      </div>
      <div className="bg-card p-2 text-center">
        <p className="text-xs font-semibold text-foreground truncate">
          {animal.name}
        </p>
        <p className="text-[10px] text-muted-foreground">{animal.animalId}</p>
      </div>
    </div>
  );
}
