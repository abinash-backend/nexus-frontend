import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function EditWorkflow() {
  return (
    <div className="mx-auto max-w-3xl">

      <Card className="border-slate-800 bg-slate-900/70">

        <CardHeader>

          <CardTitle className="text-2xl text-white">
            Edit Workflow
          </CardTitle>

          <CardDescription>
            Update your workflow configuration.
          </CardDescription>

        </CardHeader>

        <CardContent className="space-y-6">

          <div className="space-y-2">

            <Label htmlFor="workflowName">
              Workflow Name
            </Label>

            <Input
              id="workflowName"
              defaultValue="Order Processing"
            />

          </div>

          <div className="space-y-2">

            <Label htmlFor="description">
              Description
            </Label>

            <Input
              id="description"
              defaultValue="Process incoming customer orders automatically."
            />

          </div>

          <div className="space-y-2">

            <Label htmlFor="type">
              Workflow Type
            </Label>

            <Input
              id="type"
              defaultValue="Order Processing"
            />

          </div>

          <div className="flex justify-end gap-4">

            <Button variant="outline">
              Cancel
            </Button>

            <Button>
              Save Changes
            </Button>

          </div>

        </CardContent>

      </Card>

    </div>
  );
}

export default EditWorkflow;