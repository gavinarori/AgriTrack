"use client";

import { MedicalRecord, VaccinationRecord } from "@/lib/profiles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Calendar } from "lucide-react";

interface AnimalHealthSectionProps {
  medicalRecords: MedicalRecord[];
  vaccinations: VaccinationRecord[];
}

export function AnimalHealthSection({
  medicalRecords,
  vaccinations,
}: AnimalHealthSectionProps) {
  const now = new Date();

  return (
    <div className="space-y-6">
      {/* Medical Records */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Medical History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {medicalRecords.length === 0 ? (
            <p className="text-sm text-muted-foreground">No medical records yet.</p>
          ) : (
            <div className="space-y-4">
              {medicalRecords.map((record) => (
                <div
                  key={record.id}
                  className="border-l-4 border-accent bg-secondary/30 p-4 rounded-r-lg"
                >
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">
                      {record.type}
                    </h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {record.date.toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {record.description}
                  </p>
                  {record.notes && (
                    <p className="text-sm bg-background/50 p-2 rounded">
                      {record.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Vaccinations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Vaccination Record</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {vaccinations.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No vaccination records yet.
            </p>
          ) : (
            <div className="space-y-4">
              {vaccinations.map((vacc) => {
                const isDue = vacc.nextDueDate <= now;
                return (
                  <div
                    key={vacc.id}
                    className="border-l-4 border-primary bg-secondary/30 p-4 rounded-r-lg"
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {vacc.vaccine}
                        </h4>
                        {vacc.veterinarian && (
                          <p className="text-xs text-muted-foreground mt-1">
                            by {vacc.veterinarian}
                          </p>
                        )}
                      </div>
                      {isDue ? (
                        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm mt-3">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Vaccinated
                        </p>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-accent" />
                          <p className="font-medium">
                            {vacc.date.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Next Due
                        </p>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-accent" />
                          <p
                            className={`font-medium ${
                              isDue
                                ? "text-destructive"
                                : "text-foreground"
                            }`}
                          >
                            {vacc.nextDueDate.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
