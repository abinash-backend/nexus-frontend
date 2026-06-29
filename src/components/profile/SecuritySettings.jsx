import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

function SecuritySettings() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          Security
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-4">

        <Button variant="secondary">
          Change Password
        </Button>

        <Button variant="outline">
          Two-Factor Authentication
        </Button>

      </CardContent>

    </Card>
  );
}

export default SecuritySettings;