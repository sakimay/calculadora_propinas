import { Dispatch, SetStateAction } from "react"

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
    setTip: Dispatch<SetStateAction<number>>
}

export default function TipPercentageForm({ setTip }: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl mb-2">Propina:</h3>
            <form action="">
                {tipOptions.map(tip => (
                    <div className="flex gap-2" key={tip.id}>
                        <label htmlFor="">{tip.label}</label>
                        <input
                            type="radio"
                            name="tip"
                            id={tip.id}
                            value={tip.value}
                            onChange={() => setTip(tip.value)}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
