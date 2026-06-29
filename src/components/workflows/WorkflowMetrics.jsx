import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Activity,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

function WorkflowMetrics() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>
        <CardTitle className="text-white">
          Workflow Metrics
        </CardTitle>
      </CardHeader>

      <CardContent>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-lg border border-slate-800 p-5">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-400">
                Total Runs
              </p>

              <Activity
                size={18}
                className="text-slate-500"
              />

            </div>

            <h3 className="mt-4 text-3xl font-bold text-white">
              182
            </h3>

          </div>

          <div className="rounded-lg border border-slate-800 p-5">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-400">
                Success Rate
              </p>

              <CheckCircle2
                size={18}
                className="text-emerald-400"
              />

            </div>

            <h3 className="mt-4 text-3xl font-bold text-white">
              97%
            </h3>

          </div>

          <div className="rounded-lg border border-slate-800 p-5">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-400">
                Avg Duration
              </p>

              <Clock3
                size={18}
                className="text-blue-400"
              />

            </div>

            <h3 className="mt-4 text-3xl font-bold text-white">
              3.4s
            </h3>

          </div>

          <div className="rounded-lg border border-slate-800 p-5">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-400">
                Failed Runs
              </p>

              <XCircle
                size={18}
                className="text-red-400"
              />

            </div>

            <h3 className="mt-4 text-3xl font-bold text-white">
              5
            </h3>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}

export default WorkflowMetrics;