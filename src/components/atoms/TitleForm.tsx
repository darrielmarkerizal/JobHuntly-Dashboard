import React, { FC } from "react";

interface TitleFormProps {
  title: string;
  subtitle: string;
}

const TitleForm: FC<TitleFormProps> = ({ title, subtitle }) => {
  return (
    <div className="my-5">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-gray-400 ">{subtitle}</div>
    </div>
  );
};

export default TitleForm;
