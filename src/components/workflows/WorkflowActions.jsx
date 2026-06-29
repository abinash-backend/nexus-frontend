
import { Play, Pencil, Copy, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

function WorkflowActions() {
  return (
    <section className="flex flex-wrap items-center gap-4">
      <Button
        size="lg"
        className="gap-2"
      >
        <Play size={20} />
        Execute Workflow
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="gap-2"
      >
        <Pencil size={20} />
        Edit Workflow
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="gap-2"
      >
        <Copy size={20} />
        Clone Workflow
      </Button>

      <Button
        variant="destructive"
        size="lg"
        className="ml-auto gap-2"
      >
        <Trash2 size={20} />
        Delete Workflow
      </Button>
    </section>
  );
}

export default WorkflowActions;

