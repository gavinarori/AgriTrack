"use client";

import Image from "next/image";
import { Paddock, PaddockAnimal } from "@/lib/paddocks";
import { X } from "lucide-react";

interface PaddockCardProps {
  paddock: Paddock;
  isDragOver?: boolean;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>, paddock: Paddock) => void;
  onClick?: () => void;
  onRemoveAnimal?: (paddockId: string) => void;
}

export function PaddockCard({
  paddock,
  isDragOver,
  onDragOver,
  onDragLeave,
  onDrop,
  onClick,
  onRemoveAnimal,
}: PaddockCardProps) {
  const typeColors: Record<string, string> = {
    cow: "border-blue-300 bg-blue-50 dark:bg-blue-950/20",
    sheep: "border-purple-300 bg-purple-50 dark:bg-purple-950/20",
    goat: "border-amber-300 bg-amber-50 dark:bg-amber-950/20",
  };

  const bgColor = paddock.animal
    ? typeColors[paddock.animal.animalType]
    : "border-border bg-card";

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={(e) => onDrop?.(e, paddock)}
      onClick={onClick}
      className={`
        relative h-64 rounded-lg border-2 border-dashed
        transition-all duration-200 cursor-pointer
        ${isDragOver ? "border-primary bg-accent/10 scale-105" : bgColor}
        ${paddock.animal ? "border-solid cursor-pointer" : ""}
        hover:shadow-md
      `}
    >
      {paddock.animal ? (
        <>
          {/* Animal content */}
          <div className="relative h-44 w-full overflow-hidden rounded-t-md">
            <Image
              src={paddock.animal.image}
              alt={paddock.animal.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Remove button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveAnimal?.(paddock.id);
              }}
              className="absolute top-2 right-2 bg-destructive/80 hover:bg-destructive text-white rounded-full p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Animal info */}
          <div className="p-3 bg-card rounded-b-lg border-t border-border">
            <p className="font-semibold text-sm text-foreground">
              {paddock.animal.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {paddock.animal.animalId}
            </p>
          </div>

          {/* Paddock name overlay */}
          <div className="absolute bottom-14 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/50 to-transparent text-white">
            <p className="text-xs font-medium">{paddock.name}</p>
          </div>
        </>
      ) : (
        <>
          {/* Empty state */}
          <div className="h-full flex flex-col items-center justify-center text-center p-4">
            <div className="text-4xl mb-2 opacity-30">🐄</div>
            <p className="font-semibold text-foreground mb-1">{paddock.name}</p>
            <p className="text-xs text-muted-foreground">
              Drag an animal here
            </p>
          </div>
        </>
      )}
    </div>
  );
}
