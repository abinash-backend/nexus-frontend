import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { UserCircle } from "lucide-react";

function UserProfileCard() {
  return (
    <Card className="border-slate-800 bg-slate-900/70">

      <CardHeader>

        <CardTitle className="text-white">
          User Profile
        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="flex items-center gap-6">

          <UserCircle
            size={72}
            className="text-slate-400"
          />

          <div>

            <h2 className="text-2xl font-semibold text-white">
              Abinash
            </h2>

            <p className="text-slate-400">
              Java Backend Developer
            </p>

            <p className="mt-2 text-slate-500">
              abinash@example.com
            </p>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}

export default UserProfileCard;