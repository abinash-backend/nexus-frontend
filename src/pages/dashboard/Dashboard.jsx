import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import StatsGrid from "@/components/dashboard/StatsGrid";
import QuickActions from "@/components/dashboard/QuickActions";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import RecentExecutions from "@/components/dashboard/RecentExecutions";

function Dashboard() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />
      <StatsGrid />
      <QuickActions />
      <ActivityTimeline />
      <RecentExecutions />
    </div>
  );
}

export default Dashboard;