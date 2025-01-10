"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-medium">Welcome {user?.email}!</h1>
      <p className="text-gray-500 mt-2">You are signed in.</p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button onClick={() => router.push("/")} variant="outline">
          Back to home
        </Button>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
    </div>
  );
};

export default DashboardPage;
