import { Button } from "@/components/ui/button";
import { Play, Pencil, Trash2 } from "lucide-react";

function WorkflowRow({
  workflow,
  status,
  lastRun,
  updated,
}) {
  return (
    <tr className="border-b border-slate-800">

      <td className="py-4 text-white">
        {workflow}
      </td>

      <td className="py-4 text-slate-300">
        {status}
      </td>

      <td className="py-4 text-slate-300">
        {lastRun}
      </td>

      <td className="py-4 text-slate-300">
        {updated}
      </td>

      <td className="py-4">

        <div className="flex gap-2">

          <Button size="icon" variant="ghost">
            <Play size={16} />
          </Button>

          <Button size="icon" variant="ghost">
            <Pencil size={16} />
          </Button>

          <Button size="icon" variant="ghost">
            <Trash2 size={16} />
          </Button>

        </div>

      </td>

    </tr>
  );
}

export default WorkflowRow;