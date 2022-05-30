import React, {
  createContext,
  useContext,
  ReactNode,
  useCallback,
  useState,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Plant } from '../http/models/Plant';

type CartContextProps = {
  cartPlants: Plant[];
  addPlantToCart: (plant: Plant) => void;
  increment(): void;
  decrement(): void;
  quantity: number;
};

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<CartContextProps | null>(null);

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartPlants, setCartPlants] = useState<Plant[]>([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    async function loadCartPlants() {
      const storagedCartPlants = await getCart();
      if (storagedCartPlants) {
        setCartPlants([...storagedCartPlants]);
      }
    }

    loadCartPlants();
  }, []);

  const increment = useCallback(() => {
    setQuantity(prevState => prevState + 1);
  }, []);

  const decrement = useCallback(() => {
    if (quantity > 0) {
      setQuantity(prevState => prevState - 1);
    }
  }, [quantity]);

  const addPlantToCart = useCallback(async (plant: Plant) => {
    const isAlreadyPlantsFavorite = cartPlants.some(
      plants => plants.id === plant.id,
    );

    if (isAlreadyPlantsFavorite) {
      const plantsFilteredFavorites = cartPlants.filter(
        favorite => favorite.id !== plant.id,
      );
      setCartPlants(plantsFilteredFavorites);
      await AsyncStorage.setItem(
        '@cart/checkout',
        JSON.stringify([...cartPlants]),
      );
    } else {
      setCartPlants(prevCart => [...prevCart, plant]);
      await AsyncStorage.setItem(
        '@cart/checkout',
        JSON.stringify([...cartPlants, plant]),
      );
    }
  }, []);

  const getCart = useCallback(async () => {
    const response = await AsyncStorage.getItem('@cart/checkout');
    const jsonFormatted = JSON.parse(response as string);
    return jsonFormatted;
  }, []);

  return (
    <CartContext.Provider
      value={{
        addPlantToCart,
        cartPlants,
        quantity,
        increment,
        decrement,
      }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextProps {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('error');
  }
  return context;
}

export { CartProvider, useCart };
