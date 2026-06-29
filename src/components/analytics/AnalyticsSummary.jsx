import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AnalyticsSummary() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          Analytics Summary
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-4">

        <p className="text-slate-300">
          • Workflow execution success rate increased by 5% over the last month.
        </p>

        <p className="text-slate-300">
          • Average execution time improved from 4.2 sec to 3.4 sec.
        </p>

        <p className="text-slate-300">
          • Order Processing remains the most frequently executed workflow.
        </p>

        <p className="text-slate-300">
          • Failed executions decreased compared to the previous reporting period.
        </p>

      </CardContent>

    </Card>
  );
}

export default AnalyticsSummary;