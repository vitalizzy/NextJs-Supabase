"use client";

import { useLanguage } from "@/context/language-context";
import Image from "next/image";

export const dynamic = "force-dynamic";

const EmailSuccessPage = () => {
  const { t } = useLanguage();

  return (
    <div className="h-screen grid place-content-center">
      <div className="max-w-md text-center space-y-3">
        <Image
          width={1000}
          height={1000}
          className="w-60 h-60 mx-auto"
          src="/assets/email-verification.png"
          alt="Email Verification"
        />

        <h2>{t.emailVerify.title}</h2>

        <p>{t.emailVerify.description}</p>
      </div>
    </div>
  );
};

export default EmailSuccessPage;
