import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

function ExecutionHeader() {
  return (
    <section className="space-y-4">

      <Button
        variant="ghost"
        className="gap-2 px-0 text-slate-400 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Workflow
      </Button>

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Execute Workflow
          </h1>

          <p className="mt-2 text-slate-400">
            Order Processing
          </p>

        </div>

        <div className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400">
          Ready
        </div>

      </div>

    </section>
  );
}

export default ExecutionHeader;