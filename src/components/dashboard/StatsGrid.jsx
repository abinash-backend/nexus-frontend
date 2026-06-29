
import {
  Workflow,
  Activity,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import StatsCard from "./StatsCard";

function StatsGrid() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Overview
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Monitor your workflow activity and execution health.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Workflows"
          value="24"
          icon={Workflow}
        />

        <StatsCard
          title="Executions"
          value="182"
          icon={Activity}
        />

        <StatsCard
          title="Success Rate"
          value="97%"
          icon={CheckCircle2}
        />

        <StatsCard
          title="Failed Runs"
          value="5"
          icon={XCircle}
        />
      </div>
    </section>
  );
}

export default StatsGrid;

