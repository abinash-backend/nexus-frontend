import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import WorkflowRow from "./WorkflowRow";

function WorkflowTable({
  workflows,
  loading,
  error,
  onRefresh,
}) {
  if (loading) {
    return (
      <Card className="border-slate-800 bg-[#0F172A]">
        <CardContent className="py-10 text-center text-slate-400">
          Loading workflows...
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-slate-800 bg-[#0F172A]">
        <CardContent className="py-10 text-center text-red-400">
          Failed to load workflows.
        </CardContent>
      </Card>
    );
  }

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
        {workflows.length === 0 ? (
          <div className="py-10 text-center text-slate-400">
            No workflows found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="pb-4 text-sm font-medium text-slate-400">
                    Workflow
                  </th>

                  <th className="pb-4 text-sm font-medium text-slate-400">
                    Frequency
                  </th>

                  <th className="pb-4 text-sm font-medium text-slate-400">
                    Priority
                  </th>

                  <th className="pb-4 text-sm font-medium text-slate-400">
                    Status
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
                    task={workflow}
                    onRefresh={onRefresh}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default WorkflowTable;