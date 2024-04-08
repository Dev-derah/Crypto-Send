import React from "react";
import { infoCircle } from "../../../assets";

type InfoTextWithIconProps = {
  text: string;
};

const InfoTextWithIcon: React.FC<InfoTextWithIconProps> = ({ text }) => {
  return (
    <p className="inline-flex items-center gap-2 text-neutral-8">
      {text}
      <span>
        <img src={infoCircle} />
      </span>
    </p>
  );
};

export default InfoTextWithIcon;
