import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

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

  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="text-lg text-white">
          Recent Executions
        </CardTitle>

        <Button variant="link">
          View All
        </Button>

      </CardHeader>

      <CardContent>

        <table className="w-full text-left">

          <thead className="border-b border-slate-800">

            <tr>

              <th className="pb-3 text-sm text-slate-400">
                Workflow
              </th>

              <th className="pb-3 text-sm text-slate-400">
                Status
              </th>

              <th className="pb-3 text-sm text-slate-400">
                Started
              </th>

              <th className="pb-3 text-sm text-slate-400">
                Duration
              </th>

            </tr>

          </thead>

          <tbody>

            {executions.map((execution) => (

              <tr
                key={execution.id}
                className="border-b border-slate-900"
              >

                <td className="py-4 text-white">
                  {execution.workflow}
                </td>

                <td className="py-4 text-slate-300">
                  {execution.status}
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