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
          <div className="content_info">
            <p className="max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
              {item?.title}
            </p>
            <p className="font-semibold">Цена: <span className="text-[orange] font-normal">{item?.price}</span></p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
