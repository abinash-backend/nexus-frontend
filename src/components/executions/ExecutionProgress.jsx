import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

import { LoaderCircle } from "lucide-react";

function ExecutionProgress() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          Execution Progress
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="flex items-center gap-3">

          <LoaderCircle
            size={20}
            className="animate-spin text-blue-400"
          />

          <div>

            <p className="font-medium text-white">
              Running
            </p>

            <p className="text-sm text-slate-400">
              Workflow execution is currently in progress...
            </p>

          </div>

        </div>

        <Progress
          value={65}
          className="h-3"
        />

        <div className="flex justify-between text-sm text-slate-400">

          <span>
            Progress
          </span>

          <span>
            65%
          </span>

        </div>

      </CardContent>

    </Card>
  );
}

export default ExecutionProgress;