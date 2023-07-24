import React from "react";
import SliderComponent from "./common/SliderComponent";

export default function SliderSelect({ data, setData }) {
  // console.log(data);

  const bank_limit = 10000;

  return (
    <>
      <SliderComponent
        label="Home Value"
        min={0}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={500}
        onChange={(e) =>
          setData({
            ...data,
            downPayment: e.target.value * 0.2,
            loanAmount: e.target.value * 0.8,
            homeValue: e.target.value,
          })
        }
        unit="$"
        Amount={data.homeValue}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e) =>
          setData({
            ...data,
            loanAmount: data.homeValue - e.target.value,
            downPayment: e.target.value,
          })
        }
        unit="$"
        Amount={data.downPayment}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={50}
        onChange={(e) =>
          setData({
            ...data,
            downPayment: data.homeValue - e.target.value,
            loanAmount: e.target.value,
          })
        }
        unit="$"
        Amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(e) =>
          setData({
            ...data,
            interestRate: e.target.value,
          })
        }
        unit="%"
        Amount={data.interestRate}
      />
    </>
  );
}
