"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Animal {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface AnimalSelectorProps {
  animals: Animal[];
}

export function AnimalSelector({ animals }: AnimalSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {animals.map((animal) => (
        <Link key={animal.id} href={`/guide/${animal.id}`} className="group">
          <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 cursor-pointer">
            <div className="relative h-64 w-full overflow-hidden bg-muted">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="eager"
                priority
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {animal.name}
              </h2>
              <p className="text-muted-foreground mb-4">{animal.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  Get Started
                </span>
                <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
