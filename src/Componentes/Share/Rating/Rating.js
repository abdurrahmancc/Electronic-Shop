import React from "react";

const Rating = () => {
  return (
    <>
      <div class="rating rating-sm rating-half">
        <input type="radio" name="rating-10" class="rating-hidden" />
        <input type="radio" name="rating-10" class="bg-amber-500 mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" class="bg-amber-500 mask mask-star-2 mask-half-2" />
        <input
          type="radio"
          name="rating-10"
          class="bg-amber-500 mask mask-star-2 mask-half-1"
          checked
        />
        <input type="radio" name="rating-10" class="bg-amber-500 mask mask-star-2 mask-half-2" />
        <input type="radio" name="rating-10" class="bg-amber-500 mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" class="bg-amber-500 mask mask-star-2 mask-half-2" />
        <input type="radio" name="rating-10" class="bg-amber-500 mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" class="bg-amber-500 mask mask-star-2 mask-half-2" />
        <input type="radio" name="rating-10" class="bg-amber-500 mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" class="bg-amber-500 mask mask-star-2 mask-half-2" />
      </div>
    </>
  );
};

export default Rating;
