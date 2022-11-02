import { createContext, ReactNode, useEffect, useState } from 'react';
import { Coffe } from '../pages/Homepage/components/CoffeCard';
import { produce } from 'immer';

export interface CartItem extends Coffe {
  amount: number
}

interface CartContextType {
  cartItems: CartItem[],
  addToCart: (coffeItem: CartItem) => void;
  cartAmount: number;
  changeCartItemAmount: (cartItemId: number, type: 'increment' | 'decrement') => void;
  removeCartItem: (cartItemId: number) => void;
  cartTotal: number;
  cleanCart: () => void;
}

type CartContextProviderProps = {
  children: ReactNode
}

const COFFE_ITEMS_CART_STORAGE_KEY = '@coffe-delivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storagedCart = localStorage.getItem(COFFE_ITEMS_CART_STORAGE_KEY);

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }
    return []
  })
  const cartAmount = cartItems.length;

  const cartTotal = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.amount
  }, 0)

  function addToCart(coffeItem: CartItem) {
    const coffeAlreadyExists = cartItems.findIndex(coffe => coffe.id == coffeItem.id);

    const newCoffeItem = produce(cartItems, draft => {
      if (coffeAlreadyExists < 0) {
        draft.push(coffeItem)
      } else {
        draft[coffeAlreadyExists].amount += coffeItem.amount
      }
    });

    setCartItems(newCoffeItem);
  }

  function changeCartItemAmount(cartItemId: number, type: 'increment' | 'decrement') {
    const newCartItem = produce(cartItems, draft => {
      const checkCoffeAlreadyExists = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

      if (checkCoffeAlreadyExists >= 0) {
        const item = draft[checkCoffeAlreadyExists];
        draft[checkCoffeAlreadyExists].amount = type === 'increment' ? item.amount + 1 :
          item.amount - 1
      }
    });

    setCartItems(newCartItem)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, draft => {
      const checkCoffeAlreadyExists = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

      if (checkCoffeAlreadyExists >= 0) {
        draft.splice(checkCoffeAlreadyExists, 1)
      }
    });

    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFE_ITEMS_CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])


  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartAmount, changeCartItemAmount, removeCartItem, cartTotal, cleanCart }}>
      {children}
    </CartContext.Provider>
  )
}
