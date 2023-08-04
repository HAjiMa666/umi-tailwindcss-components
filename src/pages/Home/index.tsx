import React, { memo } from "react";
import Button from "@/components/Button";

const Home = memo(() => {
  return (
    <div className="h-screen bg-gradient-to-tr from-violet-800 text-white justify-center items-center flex">
      <Button>确定</Button>
    </div>
  );
});

export default Home;
