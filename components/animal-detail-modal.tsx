"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, ChevronRight } from "lucide-react";
import { PaddockAnimal } from "@/lib/paddocks";

interface AnimalDetailModalProps {
  animal: PaddockAnimal;
  isOpen: boolean;
  onClose: () => void;
}

export function AnimalDetailModal({
  animal,
  isOpen,
  onClose,
}: AnimalDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-50 bg-card rounded-lg shadow-lg max-w-md w-full mx-4 overflow-hidden">
        <div className="relative h-48 w-full bg-muted">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 28rem"
          />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-background/80 hover:bg-background rounded-full p-2 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-foreground mb-1">
              {animal.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              {animal.animalId} • {animal.animalType.charAt(0).toUpperCase() + animal.animalType.slice(1)}
            </p>
          </div>

          {/* Animal Details */}
          <div className="space-y-3 mb-6 bg-muted rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Breed
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {animal.breed}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Gender
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {animal.gender}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Date of Birth
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {new Date(animal.dateOfBirth).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Close
            </Button>
            <Link
              href={`/guide/${animal.animalType}`}
              className="flex-1"
              onClick={onClose}
            >
              <Button className="w-full">
                View Guide
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
