import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ExecutionSummary() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          Execution Summary
        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <p className="text-sm text-slate-400">
              Workflow
            </p>

            <p className="mt-1 text-white">
              Order Processing
            </p>

          </div>

          <div>

            <p className="text-sm text-slate-400">
              Version
            </p>

            <p className="mt-1 text-white">
              v1.0
            </p>

          </div>

          <div>

            <p className="text-sm text-slate-400">
              Owner
            </p>

            <p className="mt-1 text-white">
              Abinash
            </p>

          </div>

          <div>

            <p className="text-sm text-slate-400">
              Last Updated
            </p>

            <p className="mt-1 text-white">
              Today
            </p>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}

export default ExecutionSummary;