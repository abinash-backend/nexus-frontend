import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BarChart3 } from "lucide-react";

function WorkflowPerformanceChart() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="flex items-center gap-2 text-white">

          <BarChart3 size={20} />

          Workflow Performance

        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="flex h-72 items-center justify-center rounded-lg border border-dashed border-slate-700">

          <p className="text-slate-400">
            Workflow Performance Chart
          </p>

        </div>

      </CardContent>

    </Card>
  );
}

export default WorkflowPerformanceChart;