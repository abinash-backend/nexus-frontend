
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function RecentExecutions() {
  const executions = [
    {
      id: 1,
      workflow: "Order Processing",
      status: "Success",
      started: "2 min ago",
      duration: "3.4 sec",
    },
    {
      id: 2,
      workflow: "Invoice Generator",
      status: "Running",
      started: "5 min ago",
      duration: "--",
    },
    {
      id: 3,
      workflow: "Email Notification",
      status: "Failed",
      started: "8 min ago",
      duration: "1.2 sec",
    },
    {
      id: 4,
      workflow: "Data Sync",
      status: "Success",
      started: "12 min ago",
      duration: "5.1 sec",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Success":
        return (
          <Badge className="bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/20">
            Success
          </Badge>
        );

      case "Running":
        return (
          <Badge className="bg-blue-500/15 text-blue-400 hover:bg-blue-500/20">
            Running
          </Badge>
        );

      case "Failed":
        return (
          <Badge className="bg-red-500/15 text-red-400 hover:bg-red-500/20">
            Failed
          </Badge>
        );

      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <Card className="border-slate-800 bg-[#0F172A]">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-xl font-semibold tracking-tight text-white">
            Recent Executions
          </CardTitle>

          <CardDescription className="mt-1 text-slate-400">
            Monitor the latest workflow execution history.
          </CardDescription>
        </div>

        <Button
          variant="link"
          className="text-blue-400 hover:text-blue-300"
        >
          View All
        </Button>
      </CardHeader>

      <CardContent>
        <table className="w-full text-left">
          <thead className="border-b border-slate-800">
            <tr>
              <th className="pb-4 text-sm font-medium text-slate-400">
                Workflow
              </th>

              <th className="pb-4 text-sm font-medium text-slate-400">
                Status
              </th>

              <th className="pb-4 text-sm font-medium text-slate-400">
                Started
              </th>

              <th className="pb-4 text-sm font-medium text-slate-400">
                Duration
              </th>
            </tr>
          </thead>

          <tbody>
            {executions.map((execution) => (
              <tr
                key={execution.id}
                className="border-b border-slate-800 transition-colors hover:bg-slate-800/30"
              >
                <td className="py-4 font-medium text-white">
                  {execution.workflow}
                </td>

                <td className="py-4">
                  {getStatusBadge(execution.status)}
                </td>

                <td className="py-4 text-slate-300">
                  {execution.started}
                </td>

                <td className="py-4 text-slate-300">
                  {execution.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

export default RecentExecutions;

