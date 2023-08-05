import React, { memo } from "react";
import StudyItem from "@/components/StudyItem";

const Home = memo(() => {
  return (
    <div className="w-10/12 mx-auto">
      <StudyItem />
    </div>
  );
});

export default Home;
