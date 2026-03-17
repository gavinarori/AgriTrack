"use client";

import { useState } from "react";
import { PaddockCard } from "@/components/paddock-card";
import { AnimalMarker } from "@/components/animal-marker";
import { AnimalDetailModal } from "@/components/animal-detail-modal";
import { Paddock, PaddockAnimal, AVAILABLE_ANIMALS, DEFAULT_PADDOCKS } from "@/lib/paddocks";

export function PaddockGrid() {
  const [paddocks, setPaddocks] = useState<Paddock[]>(DEFAULT_PADDOCKS);
  const [draggedAnimal, setDraggedAnimal] = useState<PaddockAnimal | null>(null);
  const [dragOverPaddockId, setDragOverPaddockId] = useState<string | null>(null);
  const [selectedAnimal, setSelectedAnimal] = useState<PaddockAnimal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get animals that aren't currently assigned to any paddock
  const getAvailableAnimals = () => {
    const assignedIds = paddocks
      .filter((p) => p.animal)
      .map((p) => p.animal!.id);
    return AVAILABLE_ANIMALS.filter((a) => !assignedIds.includes(a.id));
  };

  const handleAnimalDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    animal: PaddockAnimal
  ) => {
    setDraggedAnimal(animal);
    e.dataTransfer.effectAllowed = "move";
  };

  const handlePaddockDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handlePaddockDragEnter = (paddockId: string) => {
    setDragOverPaddockId(paddockId);
  };

  const handlePaddockDragLeave = () => {
    setDragOverPaddockId(null);
  };

  const handlePaddockDrop = (
    e: React.DragEvent<HTMLDivElement>,
    paddock: Paddock
  ) => {
    e.preventDefault();
    setDragOverPaddockId(null);

    if (!draggedAnimal) return;

    // Update paddock with animal
    setPaddocks(
      paddocks.map((p) => {
        if (p.id === paddock.id) {
          return { ...p, animal: draggedAnimal };
        }
        // Remove animal from other paddocks if it was moved
        if (p.animal?.id === draggedAnimal.id) {
          return { ...p, animal: undefined };
        }
        return p;
      })
    );

    setDraggedAnimal(null);
  };

  const handleRemoveAnimal = (paddockId: string) => {
    setPaddocks(
      paddocks.map((p) =>
        p.id === paddockId ? { ...p, animal: undefined } : p
      )
    );
  };

  const handlePaddockClick = (paddock: Paddock) => {
    if (paddock.animal) {
      setSelectedAnimal(paddock.animal);
      setIsModalOpen(true);
    }
  };

  const availableAnimals = getAvailableAnimals();

  return (
    <div className="space-y-8">
      {/* Available Animals Sidebar */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Available Animals
        </h2>
        {availableAnimals.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {availableAnimals.map((animal) => (
              <AnimalMarker
                key={animal.id}
                animal={animal}
                isDragging={draggedAnimal?.id === animal.id}
                onDragStart={handleAnimalDragStart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p>All animals are assigned to paddocks</p>
          </div>
        )}
      </div>

      {/* Paddocks Grid */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Your Paddocks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paddocks.map((paddock) => (
            <PaddockCard
              key={paddock.id}
              paddock={paddock}
              isDragOver={dragOverPaddockId === paddock.id}
              onDragOver={handlePaddockDragOver}
              onDragEnter={() => handlePaddockDragEnter(paddock.id)}
              onDragLeave={handlePaddockDragLeave}
              onDrop={handlePaddockDrop}
              onClick={() => handlePaddockClick(paddock)}
              onRemoveAnimal={handleRemoveAnimal}
            />
          ))}
        </div>
      </div>

      {/* Animal Detail Modal */}
      {selectedAnimal && (
        <AnimalDetailModal
          animal={selectedAnimal}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
