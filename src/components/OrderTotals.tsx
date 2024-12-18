import { useMemo, useCallback } from "react";
import { formatCurrency } from "../helpers";
import { TOrderItem } from "../types";
type OrderTotalsProps = { 
    order: TOrderItem[]
    tip: number
}
export default function OrderTotals({ order, tip }: OrderTotalsProps) {

    const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar:
                    <span className="font-bold ml-2">{formatCurrency(subtotalAmount())}</span>
                </p>
                <p>Propina:
                    <span className="font-bold ml-2">{formatCurrency(tipAmount())}</span>
                </p>
                <p>Total a Pagar:
                    <span className="font-bold ml-2">{formatCurrency(totalAmount())}</span>
                </p>
            </div>
            <button></button>
        </>
    )
}
