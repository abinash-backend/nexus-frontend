import { Play, Pencil, Copy, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

function WorkflowActions() {
  return (
    <section className="flex flex-wrap gap-4">

      <Button className="gap-2">
        <Play size={18} />
        Execute Workflow
      </Button>

      <Button
        variant="secondary"
        className="gap-2"
      >
        <Pencil size={18} />
        Edit Workflow
      </Button>

      <Button
        variant="secondary"
        className="gap-2"
      >
        <Copy size={18} />
        Clone Workflow
      </Button>

      <Button
        variant="destructive"
        className="gap-2"
      >
        <Trash2 size={18} />
        Delete Workflow
      </Button>

    </section>
  );
}

export default WorkflowActions;