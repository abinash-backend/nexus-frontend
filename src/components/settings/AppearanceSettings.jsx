import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AppearanceSettings() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          Appearance
        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-6">

        <div>

          <p className="mb-2 text-sm text-slate-400">
            Theme
          </p>

          <Select>

            <SelectTrigger>

              <SelectValue placeholder="Dark Theme" />

            </SelectTrigger>

            <SelectContent>

              <SelectItem value="dark">
                Dark
              </SelectItem>

              <SelectItem value="light">
                Light
              </SelectItem>

              <SelectItem value="system">
                System Default
              </SelectItem>

            </SelectContent>

          </Select>

        </div>

      </CardContent>

    </Card>
  );
}

export default AppearanceSettings;