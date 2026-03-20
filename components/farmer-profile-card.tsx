"use client";

import { FarmerProfile } from "@/lib/profiles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

interface FarmerProfileCardProps {
  farmer: FarmerProfile;
}

export function FarmerProfileCard({ farmer }: FarmerProfileCardProps) {
  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">{farmer.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Farm Information */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Farm Information</h3>
          <div className="grid gap-3">
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Farm Name</p>
                <p className="font-medium">{farmer.farmName}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{farmer.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Contact Information</h3>
          <div className="grid gap-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium break-all">{farmer.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{farmer.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animals Summary */}
        <div className="bg-secondary/30 rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Total Animals</p>
          <p className="text-3xl font-bold text-primary">{farmer.totalAnimals}</p>
        </div>
      </CardContent>
    </Card>
  );
}
