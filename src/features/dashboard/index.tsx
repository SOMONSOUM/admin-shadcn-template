"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Metrics } from "@/features/dashboard/components/matrics";
import { Chart } from "@/features/dashboard/components/chart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export const DashboardScreen = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <>
      <div className="flex justify-between mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">រាយការណ៍លក់ទំនិញ</h2>
        </div>
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[200px] justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PP") : "ចាប់ពី (ថ្ងៃ/ខែ/ឆ្នាំ)"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[200px] justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PP") : "រហូតដល់ (ថ្ងៃ/ខែ/ឆ្នាំ)"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="space-y-6">
        <Metrics />
        <Chart />
      </div>
    </>
  );
};
