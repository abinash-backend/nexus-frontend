import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TrendingUp } from "lucide-react";

function ExecutionTrendChart() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="flex items-center gap-2 text-white">

          <TrendingUp size={20} />

          Execution Trend

        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="flex h-72 items-center justify-center rounded-lg border border-dashed border-slate-700">

          <p className="text-slate-400">
            Execution Trend Chart
          </p>

        </div>

      </CardContent>

    </Card>
  );
}

export default ExecutionTrendChart;