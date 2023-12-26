import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React, { FC } from "react";

interface headerProps {}

const Header: FC<headerProps> = ({}) => {
  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
      <div>
        <div>Company</div>
        <div className="font-semibold ">Twitter</div>
      </div>
      <div>
        <Button className="rounded-none py-3 px-6">
          <PlusIcon className="mr-2 w-4 h-4" /> Post a job
        </Button>
      </div>
    </div>
  );
};

export default Header;
