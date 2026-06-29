import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

function AnalyticsHeader() {
  return (
    <section className="flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Analytics
        </h1>

        <p className="mt-2 text-slate-400">
          Gain insights into workflow performance and execution trends.
        </p>

      </div>

      <Button
        variant="outline"
        className="gap-2"
      >
        <CalendarDays size={18} />
        Last 30 Days
      </Button>

    </section>
  );
}

export default AnalyticsHeader;