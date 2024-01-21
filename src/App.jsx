import React, { useEffect, useState } from "react";
import BgImage from "./assets/currencyImg.jpg";
import InputBox from "./components/InputBox";
import CurrencyInfoHook from "./hooks/CurrencyInfoHook";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [form, setForm] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currency = CurrencyInfoHook(form);

  const currencyOptions = Object.keys(currency);

  const convertCurrencyHandler = () => {
    setConvertedAmount(amount * currency[to]);
  };

  const swap = () => {
    setTo(form);
    setForm(to);

    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertCurrencyHandler();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onChangeAmount={(amount) => {
                  setAmount(amount);
                }}
                onCurrencyChange={(form) => {
                  setForm(form);
                }}
                currencyOptions={currencyOptions}
                selectCurrency={form}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                selectCurrency={to}
                currencyOptions={currencyOptions}
                onChangeAmount={(convertedAmount) => {
                  setConvertedAmount(convertedAmount);
                }}
                onCurrencyChange={(to) => {
                  setTo(to);
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sky-400 text-white px-4 py-3 rounded-lg"
            >
              Convert {form.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
