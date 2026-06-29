
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function WorkflowHeader() {
  return (
    <section className="space-y-6">
      <Button
        variant="ghost"
        className="w-fit gap-2 px-0 text-slate-400 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Workflows
      </Button>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Order Processing
          </h1>

          <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-400">
            Process incoming customer orders automatically.
          </p>
        </div>

        <Badge className="w-fit bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20">
          Active
        </Badge>
      </div>
    </section>
  );
}

export default WorkflowHeader;

