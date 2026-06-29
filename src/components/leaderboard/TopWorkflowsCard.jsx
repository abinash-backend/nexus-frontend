import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Trophy,
  Medal,
  Award,
} from "lucide-react";

function TopWorkflowsCard() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          Top Performing Workflows
        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-lg border border-yellow-500/30 p-5">

            <div className="flex items-center gap-2">

              <Trophy className="text-yellow-400" />

              <span className="font-semibold text-white">
                #1
              </span>

            </div>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Order Processing
            </h3>

            <p className="text-slate-400">
              99.2% Success
            </p>

          </div>

          <div className="rounded-lg border border-slate-700 p-5">

            <div className="flex items-center gap-2">

              <Medal className="text-slate-300" />

              <span className="font-semibold text-white">
                #2
              </span>

            </div>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Invoice Generator
            </h3>

            <p className="text-slate-400">
              98.4% Success
            </p>

          </div>

          <div className="rounded-lg border border-amber-700/40 p-5">

            <div className="flex items-center gap-2">

              <Award className="text-amber-500" />

              <span className="font-semibold text-white">
                #3
              </span>

            </div>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Email Service
            </h3>

            <p className="text-slate-400">
              97.8% Success
            </p>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}

export default TopWorkflowsCard;