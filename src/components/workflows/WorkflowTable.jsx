import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import WorkflowRow from "./WorkflowRow";

function WorkflowTable() {
  const workflows = [
    {
      id: 1,
      workflow: "Order Processing",
      status: "Active",
      lastRun: "2 min ago",
      updated: "Today",
    },
    {
      id: 2,
      workflow: "Invoice Generator",
      status: "Active",
      lastRun: "5 min ago",
      updated: "Today",
    },
    {
      id: 3,
      workflow: "Email Notification",
      status: "Inactive",
      lastRun: "Yesterday",
      updated: "2 days ago",
    },
    {
      id: 4,
      workflow: "Data Sync",
      status: "Active",
      lastRun: "1 hour ago",
      updated: "Today",
    },
  ];

  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>
        <CardTitle className="text-white">
          Workflow Definitions
        </CardTitle>
      </CardHeader>

      <CardContent>

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-slate-800">

              <th className="pb-3 text-slate-400">
                Workflow
              </th>

              <th className="pb-3 text-slate-400">
                Status
              </th>

              <th className="pb-3 text-slate-400">
                Last Run
              </th>

              <th className="pb-3 text-slate-400">
                Updated
              </th>

              <th className="pb-3 text-slate-400">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {workflows.map((workflow) => (
              <WorkflowRow
                key={workflow.id}
                {...workflow}
              />
            ))}

          </tbody>

        </table>

      </CardContent>

    </Card>
  );
}

export default WorkflowTable;