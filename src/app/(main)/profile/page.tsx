"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useLanguage } from "@/context/language-context";

const ProfilePage = () => {
  const { t } = useLanguage();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();
  }, []);

  if (loading) {
    return <div>{t.profile.loading}</div>;
  }

  return (
    <div className="space-y-3">
      <h3>{t.profile.title}</h3>

      <p>
        <strong>{t.profile.email}:</strong> {user?.email}
      </p>
    </div>
  );
};

export default ProfilePage;
