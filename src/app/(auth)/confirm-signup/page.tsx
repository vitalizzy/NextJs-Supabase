"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export const dynamic = "force-dynamic";

const ConfirmSignupPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <section className="grid place-content-center place-items-center gap-6 text-center min-h-screen">
        <Badge size="sm">
          {t.confirmSignup.badge} <CheckCircle2 className="ml-1 w-4 h-4" />
        </Badge>

        <h1 className="max-w-2xl text-4xl font-bold">
          {t.confirmSignup.title}
        </h1>

        <p className="max-w-2xl text-muted-foreground">
          {t.confirmSignup.description}
        </p>

        <div className="flex items-center gap-3">
          <Button className="rounded-full">
            <Link href="/login">{t.confirmSignup.backToLogin}</Link>
          </Button>

          <Button variant="outline" className="rounded-full">
            <a href="mailto:">{t.confirmSignup.openEmail}</a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          {t.confirmSignup.didntReceive}{" "}
          <Link
            href="/register"
            className="underline underline-offset-4 hover:text-foreground"
          >
            {t.confirmSignup.tryAgain}
          </Link>
        </p>
      </section>
    </div>
  );
};

export default ConfirmSignupPage;
