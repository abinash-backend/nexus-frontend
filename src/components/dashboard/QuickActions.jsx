import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>
        <CardTitle className="text-lg text-white">
          Quick Actions
        </CardTitle>
      </CardHeader>

      <CardContent>

        <div className="grid grid-cols-2 gap-4">

          <Button
            className="h-12 justify-start gap-2"
          >
            <Plus size={18} />
            New Workflow
          </Button>

          <Button
            className="h-12 justify-start gap-2"
          >
            <Play size={18} />
            Execute
          </Button>

          <Button
            variant="secondary"
            className="h-12 justify-start gap-2"
          >
            <BarChart3 size={18} />
            Analytics
          </Button>

          <Button
            variant="secondary"
            className="h-12 justify-start gap-2"
          >
            <Workflow size={18} />
            View Workflows
          </Button>

        </div>

      </CardContent>

    </Card>
  );
}

export default QuickActions;