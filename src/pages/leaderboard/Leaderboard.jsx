import LeaderboardHeader from "@/components/leaderboard/LeaderboardHeader";
import TopWorkflowsCard from "@/components/leaderboard/TopWorkflowsCard";
import WorkflowRankingTable from "@/components/leaderboard/WorkflowRankingTable";
import LeaderboardSummary from "@/components/leaderboard/LeaderboardSummary";

function Leaderboard() {
  return (
    <div className="space-y-8">

      <LeaderboardHeader />

      <TopWorkflowsCard />

      <WorkflowRankingTable />

      <LeaderboardSummary />

    </div>
  );
}

export default Leaderboard;