import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function WorkflowFilters() {
  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="relative w-full sm:max-w-md">
        <Search
          size={18}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <Input
          placeholder="Search workflows..."
          className="h-11 pl-10 pr-4"
        />
      </div>
    </section>
  );
}

export default WorkflowFilters;