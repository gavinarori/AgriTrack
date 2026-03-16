"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Step } from "@/lib/guides";
import Link from "next/link";

interface StepGuideProps {
  animalName: string;
  steps: Step[];
  stepImages: Record<string, string>;
}

export function StepGuide({ animalName, steps, stepImages }: StepGuideProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const currentStep = steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const toggleComplete = () => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(currentStep.id)) {
      newCompleted.delete(currentStep.id);
    } else {
      newCompleted.add(currentStep.id);
    }
    setCompletedSteps(newCompleted);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Animals
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar with steps */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                {animalName} Management Steps
              </h3>
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStepIndex(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentStepIndex === index
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-medium">
                        {index + 1}.
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{step.title}</p>
                        {completedSteps.has(step.id) && (
                          <div className="flex items-center gap-1 mt-1">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-xs text-green-600">
                              Completed
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Progress indicator */}
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-foreground">
                  Step {currentStepIndex + 1}: {currentStep.title}
                </h1>
                <div className="text-sm text-muted-foreground">
                  {currentStepIndex + 1} of {steps.length}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
                  }}
                />
              </div>

              {/* Image */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={stepImages[currentStep.id] || "/images/placeholder.jpg"}
                  alt={currentStep.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>

              {/* Description */}
              <Card className="p-6 bg-muted/50 border-none">
                <p className="text-foreground">{currentStep.description}</p>
              </Card>

              {/* Form fields */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Information to Record
                </h3>
                <div className="space-y-4">
                  {currentStep.fields.map((field) => (
                    <div key={field.name}>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <Textarea
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                          className="min-h-24"
                        />
                      ) : field.type === "select" ? (
                        <Select>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={`Select ${field.label.toLowerCase()}`}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {field.name === "gender" && (
                              <>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                              </>
                            )}
                            {field.name === "vaccine" && (
                              <>
                                <SelectItem value="fmd">FMD</SelectItem>
                                <SelectItem value="lsd">LSD</SelectItem>
                                <SelectItem value="ppr">PPR</SelectItem>
                                <SelectItem value="brucellosis">
                                  Brucellosis
                                </SelectItem>
                              </>
                            )}
                            {field.name === "status" && (
                              <>
                                <SelectItem value="available">Available</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="sold">Sold</SelectItem>
                              </>
                            )}
                          </SelectContent>
                        </Select>
                      ) : field.type === "number" ? (
                        <Input
                          type="number"
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                        />
                      ) : field.type === "date" ? (
                        <Input
                          type="date"
                          placeholder={`Select ${field.label.toLowerCase()}`}
                        />
                      ) : field.type === "file" ? (
                        <Input type="file" accept="image/*" />
                      ) : (
                        <Input
                          type="text"
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Actions */}
              <div className="flex items-center justify-between gap-4">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStepIndex === 0}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>

                <Button
                  onClick={toggleComplete}
                  variant={
                    completedSteps.has(currentStep.id)
                      ? "default"
                      : "outline"
                  }
                  className="gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {completedSteps.has(currentStep.id)
                    ? "Completed"
                    : "Mark Complete"}
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={currentStepIndex === steps.length - 1}
                  className="gap-2"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
