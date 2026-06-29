import {
  Workflow,
  Activity,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import StatsCard from "./StatsCard";

function StatsGrid() {
  return (
    <section>

      <h2 className="mb-4 text-lg font-semibold text-white">
        Overview
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

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