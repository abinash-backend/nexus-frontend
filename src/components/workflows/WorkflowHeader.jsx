import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

function WorkflowHeader() {
  return (
    <section className="flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Workflows
        </h1>

        <p className="mt-2 text-slate-400">
          Manage and execute your workflow definitions.
        </p>

      </div>

      <Button asChild className="gap-2">
  <Link to="/workflows/create">
    <Plus size={18} />
    New Workflow
  </Link>
</Button>

    </section>
  );
}

export default WorkflowHeader;