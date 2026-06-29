import { Workflow } from "lucide-react";

function EmptyWorkflowState() {
  return (
    <div className="flex flex-col items-center justify-center py-16">

      <Workflow
        size={56}
        className="text-slate-500"
      />

      <h3 className="mt-4 text-xl font-semibold text-white">
        No Workflows Found
      </h3>

      <p className="mt-2 text-slate-400">
        Create your first workflow to get started.
      </p>

    </div>
  );
}

export default EmptyWorkflowState;