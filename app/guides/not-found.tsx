import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Animal Not Found
        </h1>
        <p className="text-muted-foreground mb-6">
          The animal guide you are looking for does not exist. Please select a valid animal type.
        </p>
        <Link href="/">
          <Button className="gap-2">
            Return to Animals
          </Button>
        </Link>
      </div>
    </div>
  );
}
