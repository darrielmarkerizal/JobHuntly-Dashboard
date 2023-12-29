"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
  const router = useRouter();

  const { data: session } = useSession();

  console.log(session);

  const navCreateJobPage = () => router.push("/post-a-job");

  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
      <div>
        <div>Company</div>
        <div className="font-semibold ">{session?.user.name}</div>
      </div>
      <div>
        <Button className="rounded-none py-3 px-6" onClick={navCreateJobPage}>
          <PlusIcon className="mr-2 w-4 h-4" /> Post a job
        </Button>
      </div>
    </div>
  );
};

export default Header;
