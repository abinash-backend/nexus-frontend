import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

function ActivityTimeline() {
  const activities = [
    {
      id: 1,
      message: 'Workflow "Order Processing" created',
    },
    {
      id: 2,
      message: 'Workflow "Invoice Generator" executed',
    },
    {
      id: 3,
      message: 'Workflow "Email Notification" completed',
    },
    {
      id: 4,
      message: 'Workflow "Data Sync" failed',
    },
  ];

  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>
        <CardTitle className="text-lg text-white">
          Recent Workflow Activity
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-3"
          >
            <div className="h-2 w-2 rounded-full bg-blue-500" />

            <p className="text-sm text-slate-300">
              {activity.message}
            </p>
          </div>
        ))}

        <Button
          variant="link"
          className="px-0"
        >
          View All Activity →
        </Button>

      </CardContent>

    </Card>
  );
}

export default ActivityTimeline;