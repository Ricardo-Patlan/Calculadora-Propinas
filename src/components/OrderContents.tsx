import type { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: OrderItem["id"]) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        {order.length === 0 ? (
          <p className="text-center">La orden está vacía</p>
        ) : (
          order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-t border-gray-200 py-4 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - ${item.price}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} - Total: $
                  {item.price * item.quantity}
                </p>
              </div>

              <button
                className="bg-red-600 h-8 w-8 rounded-full text-white font-bold cursor-pointer flex items-center justify-center"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
