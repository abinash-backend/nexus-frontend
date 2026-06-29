
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

function WorkflowOverview() {
  return (
    <Card className="border-slate-800 bg-[#0F172A]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight text-white">
          Workflow Overview
        </CardTitle>

        <CardDescription className="text-slate-400">
          View the key information and metadata for this workflow.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Description
            </p>

            <p className="text-sm leading-relaxed text-white">
              Process incoming customer orders automatically.
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Workflow Type
            </p>

            <p className="text-sm font-medium text-white">
              Order Processing
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Version
            </p>

            <p className="text-sm font-medium text-white">
              v1.0
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Status
            </p>

            <Badge className="bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/20">
              Active
            </Badge>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Owner
            </p>

            <p className="text-sm font-medium text-white">
              Abinash
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Last Updated
            </p>

            <p className="text-sm font-medium text-white">
              Today
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default WorkflowOverview;

