import AnalyticsHeader from "@/components/analytics/AnalyticsHeader";
import AnalyticsStats from "@/components/analytics/AnalyticsStats";
import ExecutionTrendChart from "@/components/analytics/ExecutionTrendChart";
import WorkflowPerformanceChart from "@/components/analytics/WorkflowPerformanceChart";
import AnalyticsSummary from "@/components/analytics/AnalyticsSummary";

function Analytics() {
  return (
    <div className="space-y-8">

      <AnalyticsHeader />

      <AnalyticsStats />

      <ExecutionTrendChart />

      <WorkflowPerformanceChart />

      <AnalyticsSummary />

    </div>
  );
}

export default Analytics;
