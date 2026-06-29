import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function WorkflowRankingTable() {

  const rankings = [
    {
      rank: 1,
      workflow: "Order Processing",
      success: "99.2%",
      executions: 540,
    },
    {
      rank: 2,
      workflow: "Invoice Generator",
      success: "98.4%",
      executions: 488,
    },
    {
      rank: 3,
      workflow: "Email Service",
      success: "97.8%",
      executions: 420,
    },
    {
      rank: 4,
      workflow: "Data Sync",
      success: "96.5%",
      executions: 387,
    },
  ];

  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          Workflow Rankings
        </CardTitle>

      </CardHeader>

      <CardContent>

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-slate-800">

              <th className="pb-3 text-slate-400">
                Rank
              </th>

              <th className="pb-3 text-slate-400">
                Workflow
              </th>

              <th className="pb-3 text-slate-400">
                Success Rate
              </th>

              <th className="pb-3 text-slate-400">
                Executions
              </th>

            </tr>

          </thead>

          <tbody>

            {rankings.map((workflow) => (

              <tr
                key={workflow.rank}
                className="border-b border-slate-900"
              >

                <td className="py-4 text-white">
                  #{workflow.rank}
                </td>

                <td className="py-4 text-white">
                  {workflow.workflow}
                </td>

                <td className="py-4 text-emerald-400">
                  {workflow.success}
                </td>

                <td className="py-4 text-slate-300">
                  {workflow.executions}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </CardContent>

    </Card>
  );
}

export default WorkflowRankingTable;