import React from "react";
import HappyClients from "./HappyClients";
import OurBlog from "./OurBlog";

const BlogAndHappyClients = () => {
  return (
    <section className="container mx-auto mt-10">
      <div className="grid grid-cols-2 gap-6">
        <OurBlog></OurBlog>
        <div>
          <HappyClients />
        </div>
      </div>
    </section>
  );
};

export default BlogAndHappyClients;
