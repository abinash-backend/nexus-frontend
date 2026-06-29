import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function StatsCard({ title, value, icon: Icon }) {
  return (
    <Card className="group border-slate-800 bg-[#0F172A] transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-sm font-medium text-slate-400">
          {title}
        </CardTitle>

        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors duration-200 group-hover:bg-blue-500/20">
            <Icon size={20} />
          </div>
        )}
      </CardHeader>

      <CardContent>
        <h2 className="text-4xl font-bold tracking-tight text-white">
          {value}
        </h2>
      </CardContent>
    </Card>
  );
}

export default StatsCard;