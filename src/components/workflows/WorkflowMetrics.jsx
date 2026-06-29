
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Activity,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

function MetricCard({
  title,
  value,
  icon: Icon,
  iconClassName,
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-400">
          {title}
        </p>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800">
          <Icon
            size={20}
            className={iconClassName}
          />
        </div>
      </div>

      <h3 className="mt-4 text-4xl font-bold tracking-tight text-white">
        {value}
      </h3>
    </div>
  );
}

function WorkflowMetrics() {
  return (
    <Card className="border-slate-800 bg-[#0F172A]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight text-white">
          Workflow Metrics
        </CardTitle>

        <CardDescription className="text-slate-400">
          Execution statistics and performance metrics for this workflow.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Total Runs"
            value="182"
            icon={Activity}
            iconClassName="text-slate-300"
          />

          <MetricCard
            title="Success Rate"
            value="97%"
            icon={CheckCircle2}
            iconClassName="text-emerald-400"
          />

          <MetricCard
            title="Avg Duration"
            value="3.4s"
            icon={Clock3}
            iconClassName="text-blue-400"
          />

          <MetricCard
            title="Failed Runs"
            value="5"
            icon={XCircle}
            iconClassName="text-red-400"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default WorkflowMetrics;
