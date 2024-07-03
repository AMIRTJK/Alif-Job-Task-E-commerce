import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { actions } from "../reducers/Shop/shop";

import { IconButton, Avatar, Button } from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Basket = () => {
  const { setBasketProducts } = actions;
  const basketProducts = useSelector((store) => store.shop.basketProducts);

  const dispatch = useDispatch();

  const handleRemoveBasketProducts = () => {
    localStorage.removeItem("basketProduct");
    dispatch(setBasketProducts([]));
  };

  const handleDeleteBasketById = (clickedId) => {
    const filteredBasketProductsAfterDelete = basketProducts.filter(
      (e) => e.id !== clickedId
    );

    dispatch(setBasketProducts(filteredBasketProductsAfterDelete));
    localStorage.setItem(
      "basketProduct",
      JSON.stringify(filteredBasketProductsAfterDelete)
    );
  };

  const handleUpdateProductCount = (clickedId, newCount) => {
    const updatedBasketProducts = basketProducts.map((e) => {
      if (e.id === clickedId) {
        const newPrice = (e.price / e.count) * newCount;
        return {
          ...e,
          count: newCount,
          price: parseFloat(newPrice.toFixed(2)),
        };
      }
      return e;
    });

    dispatch(setBasketProducts(updatedBasketProducts));

    localStorage.setItem(
      "basketProduct",
      JSON.stringify(updatedBasketProducts)
    );
  };

  const incrementCount = (product) => {
    const newCount = product.count + 1;
    handleUpdateProductCount(product.id, newCount);
  };

  const decrementCount = (product) => {
    if (product.count > 1) {
      const newCount = product.count - 1;
      handleUpdateProductCount(product.id, newCount);
    }
  };

  useEffect(() => {
    const storedBasketProducts =
      JSON.parse(localStorage.getItem("basketProduct")) || [];
    dispatch(setBasketProducts(storedBasketProducts));
  }, [dispatch, setBasketProducts]);

  console.log(basketProducts);

  return (
    <main className="h-[100vh] relative">
      <div className="content bg-[#fff] min-w-[750px] ">
        <div className="title flex justify-between items-center p-[15px] mb-[10px]">
          <p className="text-[18px] font-semibold ">Корзина</p>
          <button
            onClick={handleRemoveBasketProducts}
            className="text-[#1976D3] hover:text-[red] text-[14px] font-[500] transition-all duration-100"
          >
            Очистить корзину
          </button>
        </div>
        <ul className="category-scrollbar overflow-y-auto h-[80vh] ">
          {Array.isArray(basketProducts) &&
            basketProducts.map((e) => {
              return (
                <li
                  key={e.id}
                  className="border-b-[1px] flex justify-between gap-5 p-[15px]"
                >
                  <div className="product-info flex gap-3">
                    <Avatar src={e.image} />
                    <div className="title">
                      <p className="text-[14px] font-semibold max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                        {e.title}
                      </p>
                      <p className="text-[14px] text-[orange]">{e.price} c.</p>
                    </div>
                  </div>
                  <div className="panel-control flex gap-3">
                    <div className="add-more flex items-center gap-2 border-[1px] rounded-lg overflow-hidden">
                      <button
                        onClick={() => decrementCount(e)}
                        className={`py-[10px] px-[20px] hover:text-[orange] transition-all duration-100 ${
                          e.count === 1 ? "bg-[#00000010]" : ""
                        }`}
                      >
                        -
                      </button>
                      <p>{e.count}</p>
                      <button
                        onClick={() => incrementCount(e)}
                        className="py-[10px] px-[20px] hover:text-[orange] transition-all duration-100"
                      >
                        +
                      </button>
                    </div>
                    <IconButton onClick={() => handleDeleteBasketById(e.id)}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      {basketProducts.length > 0 && (
        <div className="сheckout-button absolute bottom-0 p-[15px] w-full">
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              textTransform: "none",
              display: "flex",
              gap: "5px",
            }}
          >
            <ShoppingCartOutlinedIcon />
            <p>Оформить заказ</p>
          </Button>
        </div>
      )}
    </main>
  );
};

export default Basket;
