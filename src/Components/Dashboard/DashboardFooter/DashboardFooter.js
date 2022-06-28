import { current } from "daisyui/src/colors";
import React from "react";

const DashboardFooter = () => {
  return (
    <div className="w-full mx-auto">
      <p className="text-center py-4">CopyRight &copy; {new Date().getFullYear()} Spreed Team</p>
    </div>
  );
};

export default DashboardFooter;
