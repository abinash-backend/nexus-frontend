import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function WorkflowFilters() {
  return (
    <section className="flex items-center gap-4">

      <div className="relative flex-1">

        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <Input
          placeholder="Search workflows..."
          className="pl-10"
        />

      </div>

    </section>
  );
}

export default WorkflowFilters;