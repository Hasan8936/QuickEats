import { create } from 'zustand'

export type CartItem = {
  id: string
  name: string
  price: number
  qty: number
}

type AddItem = Omit<CartItem, 'qty'>

type CartState = {
  items: CartItem[]
  addItem: (item: AddItem, qty?: number) => void
  removeItem: (id: string) => void
  clear: () => void
  total: () => number
}

const useCart = create<CartState>((set: any, get: any) => ({
  items: [],
  addItem: (item: AddItem, qty = 1) => {
    set((state: CartState) => {
      const existing = state.items.find((i) => i.id === item.id)
      if (existing) {
        return { items: state.items.map((i) => (i.id === item.id ? { ...i, qty: i.qty + qty } : i)) }
      }
      return { items: [...state.items, { ...item, qty }] }
    })
  },
  removeItem: (id: string) => set((state: CartState) => ({ items: state.items.filter((i) => i.id !== id) })),
  clear: () => set({ items: [] }),
  total: () => get().items.reduce((s: number, i: CartItem) => s + i.price * i.qty, 0),
}))

export default useCart
