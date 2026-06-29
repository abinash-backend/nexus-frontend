import WorkflowHeader from "@/components/workflows/WorkflowHeader";
import WorkflowActions from "@/components/workflows/WorkflowActions";
import WorkflowOverview from "@/components/workflows/WorkflowOverview";
import WorkflowMetrics from "@/components/workflows/WorkflowMetrics";
import WorkflowExecutionHistory from "@/components/workflows/WorkflowExecutionHistory";

function WorkflowDetails() {
  return (
    <div className="space-y-8 lg:space-y-10">

      <WorkflowHeader />

      <WorkflowActions />

      <WorkflowOverview />

      <WorkflowMetrics />

      <WorkflowExecutionHistory />

    </div>
  );
}

export default WorkflowDetails;