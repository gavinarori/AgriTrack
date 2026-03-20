"use client";

import { WeightEntry } from "@/lib/profiles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface WeightChartProps {
  data: WeightEntry[];
  animalName: string;
}

export function WeightChart({ data, animalName }: WeightChartProps) {
  if (data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Weight History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            No weight records available.
          </p>
        </CardContent>
      </Card>
    );
  }

  // Transform data for Recharts
  const chartData = data.map((entry) => ({
    date: entry.date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    weight: entry.weight,
    fullDate: entry.date.toLocaleDateString(),
  }));

  const avgWeight =
    Math.round(
      (data.reduce((sum, entry) => sum + entry.weight, 0) / data.length) * 10
    ) / 10;
  const maxWeight = Math.max(...data.map((e) => e.weight));
  const minWeight = Math.min(...data.map((e) => e.weight));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Weight History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-secondary/30 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">Current</p>
            <p className="text-2xl font-bold text-primary">
              {data[data.length - 1].weight} kg
            </p>
          </div>
          <div className="bg-secondary/30 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">Average</p>
            <p className="text-2xl font-bold text-primary">{avgWeight} kg</p>
          </div>
          <div className="bg-secondary/30 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">Gain</p>
            <p className="text-2xl font-bold text-accent">
              +{maxWeight - minWeight} kg
            </p>
          </div>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="date"
              stroke="hsl(var(--foreground))"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="hsl(var(--foreground))"
              style={{ fontSize: "12px" }}
              domain={[minWeight - 10, maxWeight + 10]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              formatter={(value: any) => [`${value} kg`, "Weight"]}
              labelFormatter={(label) => `Date: ${label}`}
            />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--accent))", r: 4 }}
              activeDot={{ r: 6 }}
              name="Weight (kg)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
