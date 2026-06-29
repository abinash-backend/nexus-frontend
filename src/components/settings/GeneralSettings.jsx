import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

function GeneralSettings() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          General Settings
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="flex items-center justify-between">

          <Label>
            Enable Workflow Auto Refresh
          </Label>

          <Switch />

        </div>

        <div className="flex items-center justify-between">

          <Label>
            Enable Execution History
          </Label>

          <Switch defaultChecked />

        </div>

      </CardContent>

    </Card>
  );
}

export default GeneralSettings;