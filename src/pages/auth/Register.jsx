
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
    <Card className="rounded-2xl border border-slate-800 bg-[#0F172A] shadow-2xl backdrop-blur-md">
      <CardHeader className="space-y-3 pb-6">
        <CardTitle className="text-3xl font-bold tracking-tight text-white">
          Create Your Account
        </CardTitle>

        <CardDescription className="leading-relaxed text-slate-400">
          Start your workflow journey today.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="text-sm font-medium text-slate-300"
          >
            Full Name
          </Label>

          <Input
            id="name"
            type="text"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-slate-300"
          >
            Email
          </Label>

          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-slate-300"
          >
            Password
          </Label>

          <Input
            id="password"
            type="password"
            placeholder="Create a password"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-slate-300"
          >
            Confirm Password
          </Label>

          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <div className="flex items-start space-x-3 pt-1">
          <Checkbox id="terms" />

          <Label
            htmlFor="terms"
            className="cursor-pointer text-sm leading-5 text-slate-300"
          >
            I agree to the Terms & Privacy Policy
          </Label>
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-lg bg-blue-600 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 active:scale-[0.98]"
        >
          Create Account
        </Button>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Separator className="flex-1 bg-slate-700" />

            <span className="text-xs tracking-widest text-slate-500">
              OR
            </span>

            <Separator className="flex-1 bg-slate-700" />
          </div>

          <div className="text-center text-sm text-slate-400">
            Already have an account?{" "}

            <Link
              to="/"
              className="font-semibold text-blue-400 transition-colors hover:text-blue-300 hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Register;

