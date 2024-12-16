import { useState } from "react"
import type { TMenuItem, TOrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<TOrderItem[]>([])
    
    const addItem = (item: TMenuItem ) => {
        console.log(item);
        
    }

    return {
        addItem
    }
}
