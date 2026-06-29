import { Play, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

function ExecutionActions() {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">

      <h2 className="text-xl font-semibold text-white">
        Execute Workflow
      </h2>

      <p className="mt-2 text-slate-400">
        Start a new execution for this workflow. The execution status,
        logs, and results will be updated automatically.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">

        <Button
          size="lg"
          className="gap-2"
        >
          <Play size={18} />
          Execute Now
        </Button>

        <Button
          variant="secondary"
          size="lg"
          className="gap-2"
        >
          <RotateCcw size={18} />
          Reset
        </Button>

      </div>

    </section>
  );
}

export default ExecutionActions;