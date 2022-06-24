import React from "react";

const FooterBottom = () => {
  return (
    <div className="">
      <p className="text-center py-4 text-secondary border-t border-gray-300 text-lg">
        CopyRight &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default FooterBottom;
