import type { TMenuItem ,TOrderItem } from "../types"
export type OrderActions =
    { type: 'add-item', payload: {item: TMenuItem}  } |
    { type: 'remove-item', payload: {id: TMenuItem['id']} } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: { value: number } }

export type OrderState = {
    order: TOrderItem[]
    tip: number
}

export const initialState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {
    if(action.type === 'add-item'){
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        let updatedOrder : TOrderItem[] = []
        if (itemExist) {
            updatedOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            
        }else{
            const newItem : TOrderItem = { ...action.payload.item, quantity: 1 }
            updatedOrder = [...state.order, newItem]
        }

        return {
            ...state,
            order: updatedOrder
        }
    }
    if(action.type === 'remove-item'){
       const updatedOrder = state.order.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            order: updatedOrder
        }
    }
    if(action.type === 'place-order'){ 
        return {
            ...state,
            order: initialState.order,
            tip: initialState.tip
        }
    }
    if(action.type === 'add-tip'){
        const tip = action.payload.value
        return {
            ...state,
            tip
        }
    }
    return state
}