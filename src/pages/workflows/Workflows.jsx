import WorkflowHeader from "@/components/workflows/WorkflowHeader";
import WorkflowFilters from "@/components/workflows/WorkflowFilters";
import WorkflowTable from "@/components/workflows/WorkflowTable";

function Workflows() {
  return (
    <div className="space-y-8 lg:space-y-10">

      <WorkflowHeader />

      <WorkflowFilters />

      <WorkflowTable />

    </div>
  );
}

export default Workflows;