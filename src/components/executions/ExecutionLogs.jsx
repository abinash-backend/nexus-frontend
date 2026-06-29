import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Terminal } from "lucide-react";

function ExecutionLogs() {

  const logs = [
    "[12:30:01] Execution started.",
    "[12:30:02] Loading workflow configuration...",
    "[12:30:04] Connecting to PostgreSQL...",
    "[12:30:06] Processing customer records...",
    "[12:30:09] Execution completed successfully.",
  ];

  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader className="flex flex-row items-center gap-3">

        <Terminal
          size={20}
          className="text-slate-400"
        />

        <CardTitle className="text-white">
          Execution Logs
        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="rounded-lg bg-slate-950 border border-slate-800 p-4">

          <div className="space-y-2 font-mono text-sm">

            {logs.map((log, index) => (

              <p
                key={index}
                className="text-slate-300"
              >
                {log}
              </p>

            ))}

          </div>

        </div>

      </CardContent>

    </Card>
  );
}

export default ExecutionLogs;