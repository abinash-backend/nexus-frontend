
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
    <Card className="border-slate-800 bg-[#0F172A]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight text-white">
          Workflow Definitions
        </CardTitle>

        <CardDescription className="text-slate-400">
          View, manage, and monitor all workflow definitions.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="pb-4 text-sm font-medium text-slate-400">
                  Workflow
                </th>

                <th className="pb-4 text-sm font-medium text-slate-400">
                  Status
                </th>

                <th className="pb-4 text-sm font-medium text-slate-400">
                  Last Run
                </th>

                <th className="pb-4 text-sm font-medium text-slate-400">
                  Updated
                </th>

                <th className="pb-4 text-sm font-medium text-slate-400 text-right">
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
        </div>
      </CardContent>
    </Card>
  );
}

export default WorkflowTable;

