import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function LeaderboardSummary() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          Leaderboard Summary
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-4">

        <p className="text-slate-300">
          • Order Processing continues to be the highest-performing workflow.
        </p>

        <p className="text-slate-300">
          • Invoice Generator maintains a success rate above 98%.
        </p>

        <p className="text-slate-300">
          • Email Service has improved its execution reliability this month.
        </p>

        <p className="text-slate-300">
          • Data Sync recorded the highest execution growth during the reporting period.
        </p>

      </CardContent>

    </Card>
  );
}

export default LeaderboardSummary;