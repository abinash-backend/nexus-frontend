import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

function WorkflowExecutionHistory() {
  const executions = [
    {
      id: 1,
      status: "Success",
      started: "2 min ago",
      duration: "3.4 sec",
    },
    {
      id: 2,
      status: "Running",
      started: "15 min ago",
      duration: "--",
    },
    {
      id: 3,
      status: "Failed",
      started: "1 hour ago",
      duration: "1.2 sec",
    },
    {
      id: 4,
      status: "Success",
      started: "Yesterday",
      duration: "4.8 sec",
    },
  ];

  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="text-white">
          Recent Executions
        </CardTitle>

        <Button variant="link">
          View Full History
        </Button>

      </CardHeader>

      <CardContent>

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-slate-800">

              <th className="pb-3 text-slate-400">
                Status
              </th>

              <th className="pb-3 text-slate-400">
                Started
              </th>

              <th className="pb-3 text-slate-400">
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

export default WorkflowExecutionHistory;