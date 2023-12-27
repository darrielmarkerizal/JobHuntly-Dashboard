import FieldInput from "@/components/organisms/FieldInput";
import { Instagram, InstagramIcon, Linkedin, LinkedinIcon } from "lucide-react";
import React, { FC } from "react";
import DialogAddTeam from "./DialogAddTeam";

interface TeamFormProps {}

const TeamForm: FC<TeamFormProps> = ({}) => {
  return (
    <FieldInput
      title="Basic Information"
      subtitle="Add team member to your company"
    >
      <div className="w-[65%] mb-5">
        <div className="flex flex-row justify-between items-center">
          <div className="text-lg font-semibold">2 Team Member</div>
          <DialogAddTeam />
        </div>

        <div className="grid grid-cols-3 gap-5 mt-6">
          {[0, 1, 2].map((item) => (
            <div key={item} className="p-3 shadow text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-gray-500" />
              <div className="mt-4 font-semibold">Darriel Markerizal</div>
              <div className="text-sm text-gray-500">Frontend Developer</div>

              <div className="mt-5 inline-flex mx-auto gap-3 text-gray-500">
                <InstagramIcon className="w-4 h-4" />
                <LinkedinIcon className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
};

export default TeamForm;
