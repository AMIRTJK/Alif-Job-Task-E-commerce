import React from "react";
import "../App.css";
import notFound from "/404.svg";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPages = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <main className="max-w-[1192px] mx-auto px-[32px]">
      <div className="wrapper flex flex-col gap-[20px] justify-center items-center py-[72px]">
        <img src={notFound} alt="" />
        <p className="text-[32px] font-[800]">Здесь ничего нет</p>
        <p className="font-[500]">
          Попробуйте вернуться назад или поищите что-нибудь другое.
        </p>
        <Link to="/">
          <button className="bg-[#ffbe1f] text-center py-[16px] px-[32px] rounded-lg font-[500]">
            Перейти на главную
          </button>
        </Link>
      </div>
    </main>
  );
};

export default ErrorPages;
