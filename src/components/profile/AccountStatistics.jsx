import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AccountStatistics() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          Account Statistics
        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="grid gap-6 md:grid-cols-3">

          <div>

            <p className="text-slate-400">
              Workflows
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              24
            </h3>

          </div>

          <div>

            <p className="text-slate-400">
              Executions
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              1,248
            </h3>

          </div>

          <div>

            <p className="text-slate-400">
              Success Rate
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              97%
            </h3>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}

export default AccountStatistics;