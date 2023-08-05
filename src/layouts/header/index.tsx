import React, { memo } from "react";

const Header = memo(() => {
  const className =
    "bg-slate-900 text-white mx-auto h-16 flex justify-center items-center mb-5";

  return <div className={className}>基于TailWindCSS的练习库</div>;
});

export default Header;
