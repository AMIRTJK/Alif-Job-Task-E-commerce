import React, { useState, useEffect } from "react";

import { getProducts } from "../actions/postApi";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

const SearchPopUp = ({ search, handleLinkClick }) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.shop.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, search]);

  console.log(search);

  return (
    <div className="show-searched absolute top-[130%]  rounded-lg right-0 bg-[#fff] border-[1px] shadow-lg z-10">
      <ul className="wrapper-list">
        {search.status &&
          search.value.length > 0 &&
          products.map((e) => {
            if (e.title.toLowerCase().includes(search.value.toLowerCase())) {
              return (
                <Link
                  onClick={handleLinkClick}
                  key={e.id}
                  to={`/shop-all/${e.id}`}
                >
                  <li className="hover:bg-[#EDF2F4] flex items-center gap-5 cursor-pointer px-[20px] py-[5px]">
                    <img src={e.image} alt="" className="w-[50px] h-[50px]" />
                    <p>{e.title}</p>
                  </li>
                </Link>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default SearchPopUp;
