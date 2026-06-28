import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../Redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-white text-4xl font-semibold">{count}</h1>
      <div className="flex gap-4">
        <button onClick={() => dispatch(decrement())} className="bg-red-400 text-white px-6 py-2 rounded-lg">-</button>
        <button onClick={() => dispatch(increment())} className="bg-green-400 text-white px-6 py-2 rounded-lg">+</button>
      </div>
      <button onClick={() => dispatch(reset())} className="text-white border border-white px-6 py-2 rounded-lg">Reset</button>
    </div>
  );
};

export default Counter;
