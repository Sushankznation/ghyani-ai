import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function LandingPage() {
  return (
    <div>
      Landing Page(Unprotected)
      <Link href="/sign-in">
        <Button>Login </Button>
      </Link>
      <Link href="/sign-up">
        <Button>SignUP</Button>
      </Link>
    </div>
  );
}
