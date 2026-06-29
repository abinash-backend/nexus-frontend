
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

function ActivityTimeline() {
  const activities = [
    {
      id: 1,
      message: 'Workflow "Order Processing" created',
      time: "2 min ago",
    },
    {
      id: 2,
      message: 'Workflow "Invoice Generator" executed',
      time: "10 min ago",
    },
    {
      id: 3,
      message: 'Workflow "Email Notification" completed',
      time: "35 min ago",
    },
    {
      id: 4,
      message: 'Workflow "Data Sync" failed',
      time: "1 hour ago",
    },
  ];

  return (
    <Card className="border-slate-800 bg-[#0F172A]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight text-white">
          Recent Workflow Activity
        </CardTitle>

        <CardDescription className="text-slate-400">
          Latest workflow events across your platform.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex items-start gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />

              {index !== activities.length - 1 && (
                <div className="mt-2 h-10 w-px bg-slate-700" />
              )}
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium leading-relaxed text-slate-200">
                {activity.message}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {activity.time}
              </p>
            </div>
          </div>
        ))}

        <Button
          variant="link"
          className="mt-2 h-auto p-0 text-blue-400 hover:text-blue-300"
        >
          View All Activity →
        </Button>
      </CardContent>
    </Card>
  );
}

export default ActivityTimeline;

