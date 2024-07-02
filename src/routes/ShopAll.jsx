import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../actions/postApi";

import { Button } from "@mui/material";

import Card from "../components/Card";


const ShopAll = () => {
  const dispatch = useDispatch();

  const products = useSelector((store) => store.shop.products);

  // Получаю только уникальные категории и также увеличиваю первые букву каждого элемента
  const uniqueCategories = [
    ...new Set(
      products.map(
        (product) =>
          `${product.category[0].toUpperCase()}${product.category.slice(1)}`
      )
    ),
  ];

  // Данный массив хранит список товаров исходя из действие пользователя, по дефольту показывает весь список продуктов, а при выборе определенной категории только те продукты связанные с выбранной категорией
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryStatus, setCategoryStatus] = useState("");

  const handleCategory = (category) => {
    const selectedCategory = category.toLowerCase();
    setFilteredProducts(
      selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products
    );

    setCategoryStatus(category);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <main className="px-[120px] py-[100px]">
      <h1 className="text-[32px] font-bold mb-[62px]">Shop All Products</h1>
      {/* В макете не было категории, но я решил добавить, так как апишка предоставляла список категории в постах */}
      <div className="categories flex gap-3">
        <Button
          onClick={() => handleCategory("")}
          variant={categoryStatus === "" ? "contained" : "outlined"}
          sx={{ textTransform: "none" }}
        >
          All
        </Button>
        {Array.isArray(uniqueCategories) &&
          uniqueCategories.map((e, index) => (
            <Button
              onClick={() => handleCategory(e)}
              variant={categoryStatus === e ? "contained" : "outlined"}
              key={index}
              sx={{ textTransform: "none" }}
            >
              {e}
            </Button>
          ))}
      </div>
      <div className="wrapper-posts mt-[30px] flex justify-between items-start gap-2 flex-wrap">
        {Array.isArray(filteredProducts) &&
          filteredProducts.map((e) => {
            return <Card key={e.id} item={e} />;
          })}
      </div>
    </main>
  );
};

export default ShopAll;
