import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

function Login() {
  return (
    <Card className="border-slate-800 bg-slate-900/70 backdrop-blur">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl">
          Welcome Back
        </CardTitle>

        <CardDescription>
          Sign in to continue to Nexus
        </CardDescription>
      </CardHeader>

       <CardContent className="space-y-6">

  <div className="space-y-2">
    <Label htmlFor="email">
      Email
    </Label>

    <Input
      id="email"
      type="email"
      placeholder="you@example.com"
    />
  </div>

  <div className="space-y-2">
    <Label htmlFor="password">
      Password
    </Label>

    <Input
      id="password"
      type="password"
      placeholder="Enter your password"
    />
  </div>

</CardContent>

    <div className="flex items-center justify-between">

        <div className="flex items-center space-x-2">
         <Checkbox id="remember" />
             <Label
             htmlFor="remember"
             className="cursor-pointer"
             >
         Remember Me
      </Label>
   </div>

  <Button
    variant="link"
    className="h-auto p-0"
  >
    Forgot Password?
  </Button>

</div>

<Button
  type="submit"
  className="w-full h-11 text-base font-semibold"
>
  Login
</Button>

<div className="space-y-4">

  <div className="flex items-center gap-4">
    <Separator className="flex-1" />

    <span className="text-sm text-slate-400">
      OR
    </span>

    <Separator className="flex-1" />
  </div>

  <div className="text-center text-sm text-slate-400">
    Don't have an account?{" "}

    <Link
      to="/register"
      className="font-medium text-white hover:underline"
    >
      Create Account
    </Link>

  </div>

</div>

      <CardFooter>

      </CardFooter>
    </Card>
  );
}

export default Login;