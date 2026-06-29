import ExecutionHeader from "@/components/executions/ExecutionHeader";
import ExecutionSummary from "@/components/executions/ExecutionSummary";
import ExecutionActions from "@/components/executions/ExecutionActions";

function ExecuteWorkflow() {
  return (
    <div className="space-y-8">

      <ExecutionHeader />

      <ExecutionSummary />

      <ExecutionActions />

    </div>
  );
}

export default ExecuteWorkflow;