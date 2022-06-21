import React from "react";

const FooterBottom = () => {
  return (
    <div className="bg-[#090A27]">
      <p className="text-center py-4 text-neutral text-lg">
        CopyRight &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default FooterBottom;
