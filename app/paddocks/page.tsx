
import { PaddockGrid } from "@/components/paddock-grid";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Paddock System - Livestock Management",
  description: "Manage your livestock paddocks with drag and drop assignment",
};

export default function PaddocksPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>

          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Paddock Management System
            </h1>
            <p className="text-lg text-muted-foreground">
              Drag animals from the available list into paddocks to manage your livestock placement
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-accent/10 border border-accent rounded-lg p-4 text-sm text-foreground">
            <p className="font-semibold mb-2">How to use:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Drag an animal from the Available Animals section</li>
              <li>• Drop it into any paddock to assign it</li>
              <li>• Click on an occupied paddock to view animal details</li>
              <li>• Click the X button to remove an animal from a paddock</li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <PaddockGrid />
      </div>
    </main>
  );
}
