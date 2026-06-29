import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function StatsCard({ title, value, icon: Icon }) {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">

        <CardTitle className="text-sm font-medium text-slate-400">
          {title}
        </CardTitle>

        {Icon && (
          <Icon
            size={18}
            className="text-slate-500"
          />
        )}

      </CardHeader>

      <CardContent>
        <h2 className="text-3xl font-bold text-white">
          {value}
        </h2>
      </CardContent>

    </Card>
  );
}

export default StatsCard;