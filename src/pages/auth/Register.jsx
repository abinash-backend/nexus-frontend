import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

function Register() {
  return (
    <Card className="border-slate-800 bg-slate-900/70 backdrop-blur">

      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl text-white">
          Create Your Account
        </CardTitle>

        <CardDescription>
          Start your workflow journey today.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>

          <Input
            id="name"
            type="text"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            placeholder="Create a password"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">
            Confirm Password
          </Label>

          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" />

          <Label
            htmlFor="terms"
            className="leading-5 cursor-pointer"
          >
            I agree to the Terms & Privacy Policy
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full h-11 text-base font-semibold"
        >
          Create Account
        </Button>

        <div className="flex items-center gap-4">
          <Separator className="flex-1" />

          <span className="text-sm text-slate-400">
            OR
          </span>

          <Separator className="flex-1" />
        </div>

        <div className="text-center text-sm text-slate-400">
          Already have an account?{" "}

          <Link
            to="/"
            className="font-medium text-white hover:underline"
          >
            Sign In
          </Link>
        </div>

      </CardContent>

    </Card>
  );
}

export default Register;

