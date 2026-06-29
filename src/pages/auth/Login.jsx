
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

function Login() {
  return (
    <Card className="rounded-2xl border border-slate-800 bg-[#0F172A] shadow-2xl backdrop-blur-md">
      <CardHeader className="space-y-3 pb-6">
        <CardTitle className="text-3xl font-bold tracking-tight text-white">
          Welcome Back
        </CardTitle>

        <CardDescription className="leading-relaxed text-slate-400">
          Sign in to continue to Nexus
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
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
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />

            <Label
              htmlFor="remember"
              className="cursor-pointer text-sm text-slate-300"
            >
              Remember Me
            </Label>
          </div>

          <Button
            variant="link"
            className="h-auto p-0 text-sm text-blue-400 transition-colors hover:text-blue-300"
          >
            Forgot Password?
          </Button>
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-lg bg-blue-600 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 active:scale-[0.98]"
        >
          Login
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
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-400 transition-colors hover:text-blue-300 hover:underline"
            >
              Create Account
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Login;

