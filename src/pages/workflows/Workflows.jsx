import { useEffect, useState } from "react";

import WorkflowHeader from "@/components/workflows/WorkflowHeader";
import WorkflowFilters from "@/components/workflows/WorkflowFilters";
import WorkflowTable from "@/components/workflows/WorkflowTable";

import taskService from "@/services/taskService";

function Workflows() {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadWorkflows();
  }, []);

  const loadWorkflows = async () => {
    try {
      setLoading(true);

      const data = await taskService.getTasks();

      setWorkflows(data);
      setError(null);
    } catch (err) {
      console.error("Failed to load workflows:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 lg:space-y-10">
      <WorkflowHeader />

      <WorkflowFilters />

      <WorkflowTable
        workflows={workflows}
        loading={loading}
        error={error}
        onRefresh={loadWorkflows}
      />
    </div>
  );
}

export default Workflows;