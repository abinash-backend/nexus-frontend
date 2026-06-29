import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  Plus,
  Play,
  BarChart3,
  Workflow,
} from "lucide-react";

function QuickActions() {
  return (
    <Card className="border-slate-800 bg-[#0F172A]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight text-white">
          Quick Actions
        </CardTitle>

        <CardDescription className="text-slate-400">
          Quickly access the most common workflow operations.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <Button
            className="h-14 justify-start gap-3 rounded-xl"
          >
            <Plus size={20} />
            New Workflow
          </Button>

          <Button
            className="h-14 justify-start gap-3 rounded-xl"
          >
            <Play size={20} />
            Execute Workflow
          </Button>

          <Button
            variant="secondary"
            className="h-14 justify-start gap-3 rounded-xl"
          >
            <BarChart3 size={20} />
            Analytics
          </Button>

          <Button
            variant="secondary"
            className="h-14 justify-start gap-3 rounded-xl"
          >
            <Workflow size={20} />
            View Workflows
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default QuickActions;