"use client";

import Image from "next/image";
import { Paddock, PaddockAnimal } from "@/lib/paddocks";

interface Props {
  paddock: Paddock;
  isDragOver?: boolean;
  onDragOver?: any;
  onDrop?: any;
  onDragEnter?: any;
  onDragLeave?: any;
  onAnimalClick?: (animal: PaddockAnimal) => void;
}

export function PaddockCard({
  paddock,
  isDragOver,
  onDragOver,
  onDrop,
  onDragEnter,
  onDragLeave,
  onAnimalClick,
}: Props) {
  const slots = Array.from(
    { length: paddock.capacity },
    (_, i) => paddock.animals[i] || null
  );

  return (
    <div
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      className={`
      rounded-lg border-2 border-dashed p-3
      transition-all
      min-h-[200px]
      w-full
      ${isDragOver ? "bg-accent/20" : "bg-card"}
      `}
    >
      {/* Title */}

      <div className="font-semibold mb-2 text-sm sm:text-base">
        {paddock.name}
      </div>

      {/* Slots */}

      <div
        className="
        grid
        grid-cols-3
        sm:grid-cols-4
        md:grid-cols-5
        gap-2
      "
      >
        {slots.map((animal, i) => (
          <div
            key={i}
            className="
              relative
              aspect-square
              border
              rounded
              overflow-hidden
              cursor-pointer
              bg-muted
            "
            onClick={() =>
              animal && onAnimalClick?.(animal)
            }
          >
            {animal && (
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover"
                sizes="(max-width:768px) 33vw,
                       (max-width:1024px) 20vw,
                       10vw"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}