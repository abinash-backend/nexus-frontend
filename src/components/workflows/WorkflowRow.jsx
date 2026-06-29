
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pencil, Trash2 } from "lucide-react";

function WorkflowRow({
  workflow,
  status,
  lastRun,
  updated,
}) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return (
          <Badge className="bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/20">
            Active
          </Badge>
        );

      case "Inactive":
        return (
          <Badge className="bg-slate-500/15 text-slate-300 hover:bg-slate-500/20">
            Inactive
          </Badge>
        );

      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <tr className="border-b border-slate-800 transition-colors hover:bg-slate-800/30">
      <td className="py-4 font-medium text-white">
        {workflow}
      </td>

      <td className="py-4">
        {getStatusBadge(status)}
      </td>

      <td className="py-4 text-slate-300">
        {lastRun}
      </td>

      <td className="py-4 text-slate-300">
        {updated}
      </td>

      <td className="py-4">
        <div className="flex justify-end gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-blue-500/10 hover:text-blue-400"
          >
            <Play size={16} />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-amber-500/10 hover:text-amber-400"
          >
            <Pencil size={16} />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-red-500/10 hover:text-red-400"
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default WorkflowRow;

