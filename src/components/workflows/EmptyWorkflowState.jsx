
import { Workflow, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function EmptyWorkflowState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 px-8 py-20 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10">
        <Workflow
          size={40}
          className="text-blue-400"
        />
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
        No Workflows Found
      </h3>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
        You haven't created any workflows yet. Create your first workflow to
        start automating your business processes.
      </p>

      <Button
        asChild
        size="lg"
        className="mt-8 gap-2"
      >
        <Link to="/workflows/create">
          <Plus size={18} />
          Create Workflow
        </Link>
      </Button>
    </div>
  );
}

export default EmptyWorkflowState;

