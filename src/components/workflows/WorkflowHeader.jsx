import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

function WorkflowHeader() {
  return (
    <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
          Workflows
        </h1>

        <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-400">
          Manage, organize, and execute your workflow definitions from one place.
        </p>
      </div>

      <Button
        asChild
        size="lg"
        className="gap-2 self-start sm:self-auto"
      >
        <Link to="/workflows/create">
          <Plus size={20} />
          New Workflow
        </Link>
      </Button>
    </section>
  );
}

export default WorkflowHeader;