import React, { memo } from "react";
import { history } from "umi";
import c from "classnames";

const ellipsisClassName = "text-ellipsis overflow-hidden whitespace-nowrap";

const StudyItem = memo(() => {
  return (
    <div
      onClick={() => {
        history.push("/f/detail");
      }}
      className={
        "cursor-pointer rounded-lg w-56 h-24 bg-slate-500 flex justify-start items-end px-4"
      }>
      <span className={c("w-full", ellipsisClassName)} title={"StudyItem"}>
        StudyItem
      </span>
    </div>
  );
});

export default StudyItem;
