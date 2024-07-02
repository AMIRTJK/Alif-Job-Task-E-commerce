import React from "react";

const BlogPost = ({ item }) => {
  const { title, description, image, reverseStyle } = item;

  return (
    <div
      className={`post bg-[#EDF2F4] p-[50px] rounded-[20px] flex ${reverseStyle} justify-between items-center gap-10 w-[98%]`}
    >
      <div className="wrapper-text flex flex-col gap-10">
        <p className="text-[24px] font-semibold">{title}</p>
        <p>{description}</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default BlogPost;
