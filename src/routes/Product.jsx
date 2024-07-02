import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getProductById } from "../actions/postApi";
import { actions } from "../reducers/Shop/shop";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Product = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((store) => store.shop.product);

  const { setBasketProducts } = actions;

  const navigate = useNavigate();

  const handlePostProductToBasket = () => {
    const newProduct = {
      id: Date.now().toString(),
      title: product?.title,
      price: product?.price,
      description: product?.description,
      image: product?.image,
      category: product?.category,
      count: 1,
    };

    const basketProduct =
      JSON.parse(localStorage.getItem("basketProduct")) || [];

    basketProduct.push(newProduct);

    localStorage.setItem("basketProduct", JSON.stringify(basketProduct));
    dispatch(setBasketProducts(basketProduct));
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  return (
    <main className="px-[120px] py-[100px]">
      <div className="panel-navigate flex gap-3">
        <p
          className="text-[#64696a] font-semibold cursor-pointer hover:text-[red] transition-all duration-100"
          onClick={() => navigate("/shop-all")}
        >
          Назад
        </p>
        <p className="text-[#64696a] font-semibold">/</p>
        <p className="text-[#64696a] font-semibold mb-[30px]">
          {product?.category}
        </p>
      </div>
      <h1 className="text-[32px] font-bold mb-[62px]">Shop Item</h1>
      <div className="wrapper-post flex justify-between gap-20 px-[35px]">
        <div className="wrapper-image flex justify-between items-center p-[55px] bg-[#EDF2F4] w-[35%] rounded-[20px]">
          <img src={product?.image} alt="" className="w-[100%]" />
        </div>
        <div className="wrapper-info w-[65%] flex flex-col gap-3">
          <h2 className="text-[24px] font-semibold">{product?.title}</h2>
          <p>{product?.description}</p>
          <div className="add-to-basket flex flex-col gap-3 items-start">
            <p className="font-semibold">
              Цена:{" "}
              <span className="text-[orange] font-normal">
                {product?.price} c.
              </span>
            </p>
            <Button
              variant="outlined"
              sx={{ textTransform: "none", display: "flex", gap: "10px" }}
              onClick={handlePostProductToBasket}
            >
              <ShoppingBagIcon />
              <p>Добавить в корзину</p>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
