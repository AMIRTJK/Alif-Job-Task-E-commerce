import React, { useState } from "react";

import { useSelector } from "react-redux";

import { NavLink, Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { IconButton } from "@mui/material";

import Basket from "./Basket";
import SearchPopUp from "./SearchPopUp";

import logoImage from "/logo.svg";

const Header = () => {
  const [search, setSearch] = useState({ value: "", status: false });

  const handleLinkClick = () => {
    setSearch({ value: "", status: false });
  };

  const [showBasket, setShowBasket] = useState(false);

  const toggleDrawer = (open) => () => {
    setShowBasket(open);
  };

  const basketProducts = useSelector((store) => store.shop.basketProducts);

  return (
    <>
      <header className="px-[120px] py-[36px]">
        <nav>
          <ul className="flex justify-between items-center">
            <aside className="left flex items-center justify-between w-[30%]">
              <li className="sidebar">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="sidebar">
                <NavLink to="/shop-all">Shop All</NavLink>
              </li>
              <li className="sidebar">
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </aside>
            <li className="flex justify-center w-[45%]">
              <Link to="/">
                <img src={logoImage} alt="" />
              </Link>
            </li>
            <aside className="right flex items-center justify-end gap-20 w-[50%]">
              <li className="sidebar">
                <NavLink to="about-us">About us</NavLink>
              </li>
              <li className="relative w-[45%]">
                <fieldset className="bg-[#EDF2F4] flex justify-between rounded-xl overflow-hidden py-[6px] px-[20px]">
                  <input
                    onChange={(event) =>
                      setSearch({
                        value: event.target.value,
                        status: event.target.value !== "",
                      })
                    }
                    value={search.value}
                    type="text"
                    placeholder="Search Product"
                    className=" outline-none bg-[transparent] placeholder-[#00000080] w-full"
                  />
                  <IconButton sx={{ padding: "0px" }}>
                    <SearchIcon />
                  </IconButton>
                  <SearchPopUp
                    search={search}
                    handleLinkClick={handleLinkClick}
                  />
                </fieldset>
              </li>
              <li>
                <IconButton
                  onClick={toggleDrawer(true)}
                  sx={{ position: "relative" }}
                >
                  {Array.isArray(basketProducts) &&
                    basketProducts.length > 0 && (
                      <div className="basket-products-count absolute top-0 right-0 w-[10px] h-[10px] rounded-[5px] bg-[red] flex justify-center items-center">
                        <p className="text-[7px] text-[#fff] font-bold">
                          {basketProducts.length}
                        </p>
                      </div>
                    )}

                  <ShoppingBagIcon
                    className={`${
                      Array.isArray(basketProducts) && basketProducts.length > 0
                        ? "text-[#1976D2]"
                        : ""
                    }`}
                  />
                </IconButton>
              </li>
            </aside>
          </ul>
        </nav>
      </header>
      <SwipeableDrawer
        anchor="right"
        open={showBasket}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className="">
          <Basket />
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default Header;
