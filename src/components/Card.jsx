import React from "react";

import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="wrapper-card  w-[23.5%] cursor-pointer">
      <Link to={`/shop-all/${item?.id}`}>
        <div className="card flex flex-col gap-4">
          <div className="content border-[1px] rounded-[10px] h-[500px] p-[44px] overflow-hidden">
            <img src={item?.image} alt="" className="w-full" />
          </div>
          <p className="max-w-[60%]">{item?.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
