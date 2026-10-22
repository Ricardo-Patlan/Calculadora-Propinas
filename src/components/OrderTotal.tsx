import { useMemo } from "react";
import type { OrderItem } from "../types";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotal({
  order,
  tip,
  placeOrder,
}: OrderTotalProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order],
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount],
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas:</h2>
        <p>
          Subtotal a pagar: <span className="font-bold">${subtotalAmount}</span>
        </p>
        <p>
          Propina: <span className="font-bold">${tipAmount.toFixed(2)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">${totalAmount.toFixed(2)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black text-white uppercase font-bold p-3 mt-10 hover:bg-gray-800 cursor-pointer rounded-lg disabled:opacity-50"
        disabled={subtotalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>s
    </>
  );
}
