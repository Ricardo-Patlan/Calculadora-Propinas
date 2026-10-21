import { useMemo } from "react";
import type { OrderItem } from "../types";

type OrderTotalProps = {
  order: OrderItem[];
  placeOrder: () => void;
};

export default function OrderTotal({ order, placeOrder }: OrderTotalProps) {
  const totalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order],
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total a Pagar:</h2>
        <p className="text-2xl font-bold">${totalAmount.toFixed(2)}</p>
      </div>

      <button
        className="w-full bg-black text-white uppercase font-bold p-3 mt-10 hover:bg-gray-800 cursor-pointer rounded-lg disabled:opacity-50"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
