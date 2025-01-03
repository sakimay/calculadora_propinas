import { useCallback , Dispatch} from "react";
import { formatCurrency } from "../helpers";
import { TOrderItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";
type OrderTotalsProps = { 
    order: TOrderItem[]
    tip: number
    dispatch: Dispatch<OrderActions>
}
export default function OrderTotals({ order, tip , dispatch}: OrderTotalsProps) {

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
            <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"  
                disabled={totalAmount() === 0}
                onClick={ () => dispatch({ type: 'place-order' })}
            >
                Guardar Pedido
            </button>
        </>
    )
}
