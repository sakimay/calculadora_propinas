import { Dispatch } from 'react'
import type { TMenuItem } from '../types'
import { OrderActions } from '../reducers/order-reducer'

type MenuItemProps = {
  item: TMenuItem
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className='border-2 border-teal-400 w-full p-3 flex justify-between rounded-md hover:bg-teal-200 transition'
      onClick={() => dispatch({ type: 'add-item', payload: { item } })}>
      <p>{item.name}</p>
      <p className='font-black'>{item.price} €</p>
    </button>
  )
}
