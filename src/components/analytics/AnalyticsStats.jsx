import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Activity,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

function AnalyticsStats() {

  const stats = [
    {
      title: "Total Executions",
      value: "1,248",
      icon: Activity,
    },
    {
      title: "Success Rate",
      value: "97%",
      icon: CheckCircle2,
    },
    {
      title: "Avg Duration",
      value: "3.4 sec",
      icon: Clock3,
    },
    {
      title: "Failed Runs",
      value: "28",
      icon: XCircle,
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (

          <Card
            key={stat.title}
            className="border-slate-800 bg-slate-900/70"
          >

            <CardContent className="flex items-center justify-between p-6">

              <div>

                <p className="text-sm text-slate-400">
                  {stat.title}
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  {stat.value}
                </h3>

              </div>

              <Icon
                size={24}
                className="text-slate-400"
              />

            </CardContent>

          </Card>

        );

      })}

    </section>
  );
}

export default AnalyticsStats;