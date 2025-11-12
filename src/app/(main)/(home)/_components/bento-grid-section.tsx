"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { useLanguage } from "@/context/language-context";
import { Code2, Component, LockKeyhole, Palette } from "lucide-react";

const BentoGridSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      Icon: Component,
      name: t.features.serverComponents.name,
      description: t.features.serverComponents.description,
      href: "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
      cta: t.features.learnMore,
      className: "col-span-3 lg:col-span-1",
      background: <div />,
    },
    {
      Icon: LockKeyhole,
      name: t.features.authentication.name,
      description: t.features.authentication.description,
      href: "https://supabase.com/docs/guides/auth/server-side/nextjs",
      cta: t.features.learnMore,
      className: "col-span-3 lg:col-span-2",
      background: <div />,
    },
    {
      Icon: Code2,
      name: t.features.openSource.name,
      description: t.features.openSource.description,
      href: "https://opensource.guide/",
      cta: t.features.learnMore,
      className: "col-span-3 lg:col-span-2",
      background: <div />,
    },
    {
      Icon: Palette,
      name: t.features.modernUI.name,
      description: t.features.modernUI.description,
      className: "col-span-3 lg:col-span-1",
      href: "#",
      cta: t.features.learnMore,
      background: <div />,
    },
  ];

  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default BentoGridSection;
