import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  BadgeCheck,
  Clock3,
  CircleCheckBig,
} from "lucide-react";

function ExecutionResult() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          Execution Result
        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="space-y-6">

          <div className="flex items-center gap-3">

            <CircleCheckBig
              size={28}
              className="text-emerald-500"
            />

            <div>

              <h3 className="text-lg font-semibold text-white">
                Execution Completed Successfully
              </h3>

              <p className="text-slate-400">
                Workflow finished without any errors.
              </p>

            </div>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-lg border border-slate-800 p-4">

              <div className="flex items-center gap-2">

                <BadgeCheck
                  size={18}
                  className="text-emerald-400"
                />

                <span className="text-sm text-slate-400">
                  Status
                </span>

              </div>

              <p className="mt-3 text-xl font-semibold text-white">
                Success
              </p>

            </div>

            <div className="rounded-lg border border-slate-800 p-4">

              <div className="flex items-center gap-2">

                <Clock3
                  size={18}
                  className="text-blue-400"
                />

                <span className="text-sm text-slate-400">
                  Duration
                </span>

              </div>

              <p className="mt-3 text-xl font-semibold text-white">
                3.4 sec
              </p>

            </div>

            <div className="rounded-lg border border-slate-800 p-4">

              <div className="flex items-center gap-2">

                <CircleCheckBig
                  size={18}
                  className="text-emerald-400"
                />

                <span className="text-sm text-slate-400">
                  Records Processed
                </span>

              </div>

              <p className="mt-3 text-xl font-semibold text-white">
                1,248
              </p>

            </div>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}

export default ExecutionResult;