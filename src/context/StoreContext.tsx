import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductItem } from '../types';
import { FRESH_ARRIVALS } from '../data/storeData';

interface StoreContextType {
  wishlist: ProductItem[];
  addToWishlist: (item: ProductItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  
  bag: ProductItem[];
  addToBag: (item: ProductItem) => void;
  removeFromBag: (id: string) => void;
  isInBag: (id: string) => boolean;

  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;

  wishlistDrawerOpen: boolean;
  setWishlistDrawerOpen: (open: boolean) => void;

  bagDrawerOpen: boolean;
  setBagDrawerOpen: (open: boolean) => void;

  storeInfoModalOpen: boolean;
  setStoreInfoModalOpen: (open: boolean) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Pre-populate with 1-2 favorites for immediate showcase
  const [wishlist, setWishlist] = useState<ProductItem[]>(() => {
    try {
      const saved = localStorage.getItem('bansals_wishlist');
      if (saved) return JSON.parse(saved);
      return FRESH_ARRIVALS.slice(0, 1);
    } catch {
      return FRESH_ARRIVALS.slice(0, 1);
    }
  });

  const [bag, setBag] = useState<ProductItem[]>(() => {
    try {
      const saved = localStorage.getItem('bansals_inquiry_bag');
      if (saved) return JSON.parse(saved);
      return [];
    } catch {
      return [];
    }
  });

  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [bagDrawerOpen, setBagDrawerOpen] = useState(false);
  const [storeInfoModalOpen, setStoreInfoModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('bansals_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('bansals_inquiry_bag', JSON.stringify(bag));
    } catch {}
  }, [bag]);

  const addToWishlist = (item: ProductItem) => {
    setWishlist((prev) => (prev.some((p) => p.id === item.id) ? prev : [...prev, item]));
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };

  const isInWishlist = (id: string) => wishlist.some((p) => p.id === id);

  const addToBag = (item: ProductItem) => {
    setBag((prev) => (prev.some((p) => p.id === item.id) ? prev : [...prev, item]));
  };

  const removeFromBag = (id: string) => {
    setBag((prev) => prev.filter((p) => p.id !== id));
  };

  const isInBag = (id: string) => bag.some((p) => p.id === id);

  return (
    <StoreContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        bag,
        addToBag,
        removeFromBag,
        isInBag,
        searchOpen,
        setSearchOpen,
        wishlistDrawerOpen,
        setWishlistDrawerOpen,
        bagDrawerOpen,
        setBagDrawerOpen,
        storeInfoModalOpen,
        setStoreInfoModalOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
