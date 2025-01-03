import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    dispatch: Dispatch<OrderActions>
    tip: number
}

export default function TipPercentageForm({ dispatch, tip}: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl mb-2">Propina:</h3>
            <form action="">
                {tipOptions.map(tipOption => (
                    <div className="flex gap-2" key={tipOption.id}>
                        <label htmlFor="">{tipOption.label}</label>
                        <input
                            type="radio"
                            name="tip"
                            id={tipOption.id}
                            value={tipOption.value}
                            onChange={() => dispatch({ type: 'add-tip', payload: { value: +tipOption.value } })}
                            checked={tip === tipOption.value}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
