import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

function NotificationSettings() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          Notifications
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="flex items-center justify-between">

          <Label>
            Workflow Execution Notifications
          </Label>

          <Switch defaultChecked />

        </div>

        <div className="flex items-center justify-between">

          <Label>
            Failure Alerts
          </Label>

          <Switch defaultChecked />

        </div>

        <div className="flex items-center justify-between">

          <Label>
            Weekly Analytics Report
          </Label>

          <Switch />

        </div>

      </CardContent>

    </Card>
  );
}

export default NotificationSettings;