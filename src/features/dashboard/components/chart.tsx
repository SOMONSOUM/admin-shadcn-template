"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", submitted: 0.4, approved: 0.3, reviewing: 0.5 },
  { name: "Feb", submitted: 0.5, approved: 0.4, reviewing: 0.6 },
  { name: "Mar", submitted: 0.6, approved: 0.5, reviewing: 0.7 },
  { name: "Apr", submitted: 0.7, approved: 0.6, reviewing: 0.8 },
  { name: "May", submitted: 0.3, approved: 0.2, reviewing: 0.4 },
  { name: "Jun", submitted: 0.4, approved: 0.3, reviewing: 0.5 },
];

export function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>រាយការណ៍លក់ទំនិញប្រចាំខែ</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="submitted"
                stroke="#8884d8"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="approved"
                stroke="#82ca9d"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="reviewing"
                stroke="#ffc658"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
