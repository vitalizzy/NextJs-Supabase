"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import BentoGridSection from "./_components/bento-grid-section";

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <section className="grid place-content-center place-items-center gap-6 text-center">
        <Badge size="sm">
          {t.home.badge} <Lock className="ml-1 w-4 h-4" />
        </Badge>

        <h1 className="max-w-6xl">{t.home.title}</h1>

        <p className="max-w-3xl">{t.home.description}</p>

        <div className="flex items-center gap-3">
          <Button className="rounded-full" asChild>
            <Link href="/login">{t.home.getStarted}</Link>
          </Button>

          <Button variant="outline" className="rounded-full" asChild>
            <a href="https://github.com/SarathAdhi/next-supabase-auth">
              {t.home.github}
            </a>
          </Button>
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-center">{t.home.keyFeatures}</h2>

        <BentoGridSection />
      </section>

      <section className="space-y-6 text-center">
        <h2>{t.home.openSource}</h2>

        <p className="mx-auto max-w-2xl">{t.home.openSourceDescription}</p>

        <Button size="sm" asChild>
          <a
            href="https://github.com/SarathAdhi/next-supabase-auth"
            target="_blank"
          >
            {t.home.viewOnGithub}
          </a>
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
