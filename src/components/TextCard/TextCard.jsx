import React from "react";

const TextCard = ({name}) => {
  return (
    <span className=" mr-2 text-xs font-semibold bg-[#393939] transition hover:bg-[#292929] p-2 rounded-md">
      {name}
    </span>
  );
};

export default TextCard;
