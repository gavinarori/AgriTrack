"use client";

import { useState } from "react";

import {
  Paddock,
  PaddockAnimal,
  AVAILABLE_ANIMALS,
  DEFAULT_PADDOCKS,
} from "@/lib/paddocks";

import { PaddockCard } from "@/components/paddock-card";
import { AnimalMarker } from "@/components/animal-marker";
import { AnimalDetailModal } from "@/components/animal-detail-modal";

export function PaddockGrid() {
  const [paddocks, setPaddocks] =
    useState<Paddock[]>(DEFAULT_PADDOCKS);

  const [draggedAnimal, setDraggedAnimal] =
    useState<PaddockAnimal | null>(null);

  const [dragOverId, setDragOverId] =
    useState<string | null>(null);

  const [selectedAnimal, setSelectedAnimal] =
    useState<PaddockAnimal | null>(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  // available animals

  const getAvailableAnimals = () => {
    const assigned = paddocks.flatMap((p) =>
      p.animals.map((a) => a.id)
    );

    return AVAILABLE_ANIMALS.filter(
      (a) => !assigned.includes(a.id)
    );
  };

  // drag start

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    animal: PaddockAnimal
  ) => {
    setDraggedAnimal(animal);
  };

  // drop

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    paddock: Paddock
  ) => {
    e.preventDefault();

    if (!draggedAnimal) return;

    setPaddocks(
      paddocks.map((p) => {
        if (p.id === paddock.id) {
          if (
            p.animals.length >= p.capacity
          )
            return p;

          return {
            ...p,
            animals: [
              ...p.animals,
              draggedAnimal,
            ],
          };
        }

        return {
          ...p,
          animals: p.animals.filter(
            (a) => a.id !== draggedAnimal.id
          ),
        };
      })
    );

    setDraggedAnimal(null);
  };

  const openAnimal = (
    animal: PaddockAnimal
  ) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const animals = getAvailableAnimals();

  return (
    <div className="space-y-8">

      {/* Animals */}

      <div
        className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-4
      "
      >
        {animals.map((animal) => (
          <AnimalMarker
            key={animal.id}
            animal={animal}
            onDragStart={handleDragStart}
          />
        ))}
      </div>

      {/* Paddocks */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
      >
        {paddocks.map((p) => (
          <PaddockCard
            key={p.id}
            paddock={p}
            isDragOver={
              dragOverId === p.id
            }
            onDragOver={(e) =>
              e.preventDefault()
            }
            onDrop={(e) =>
              handleDrop(e, p)
            }
            onDragEnter={() =>
              setDragOverId(p.id)
            }
            onDragLeave={() =>
              setDragOverId(null)
            }
            onAnimalClick={openAnimal}
          />
        ))}
      </div>

      {selectedAnimal && (
        <AnimalDetailModal
          animal={selectedAnimal}
          isOpen={isModalOpen}
          onClose={() =>
            setIsModalOpen(false)
          }
        />
      )}
    </div>
  );
}