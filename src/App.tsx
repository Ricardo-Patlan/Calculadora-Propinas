import { menuItems } from "./data/db";
import MenuItemComponent from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import useOrder from "../hooks/useOrder";

function App() {
  const { order, addItem, removeItem, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-2xl font-black uppercase">
          Calculadora de Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-10 px-5">
        <div>
          <h2 className="text-4xl font-black mb-5">Menú</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItemComponent key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />

              <OrderTotal order={order} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center text-2xl text-slate-400">
              La orden está vacía
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
