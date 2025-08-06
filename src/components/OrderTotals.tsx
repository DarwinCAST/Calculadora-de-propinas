import { useMemo } from "react";
import type { OrderItem } from "../types/types";
import { formatCurrency } from "../helpers";

type orderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({ order, tip, placeOrder }: orderTotalsProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black">Totales y Propina</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-blue-500 uppercase text-white font-bold mt-10 py-3 disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => placeOrder()}
      >
        Guardar orden
      </button>
    </>
  );
}
