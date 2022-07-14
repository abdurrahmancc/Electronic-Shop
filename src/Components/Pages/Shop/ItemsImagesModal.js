import React from "react";

const ItemsImagesModal = ({ img, modal }) => {
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id={modal} class="modal-toggle" />
      <label for={modal} class="modal cursor-pointer">
        <label class="relative lg:left-52" for="">
          <figure className="">
            <img className="w-full md:min-w-[540px]  h-auto" src={img} alt="" />
          </figure>
        </label>
      </label>
    </div>
  );
};

export default ItemsImagesModal;
