import create from 'zustand';
import { isBrowser } from '../utils/helpers';
import { Cart } from 'shopify-buy';

interface Store {
  cartIsOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  navIsOpen: boolean;
  openNav: () => void;
  closeNav: () => void;
  checkoutId: string | number | null;
  setCheckoutId: (id: Cart['id']) => void;
  checkout: Cart | null;
  setCheckout: (cart: Cart) => void;
  headerAnimationComplete: boolean;
  setHeaderAnimationComplete: (value: boolean) => void;
}

const [useStore] = create<Store>(set => ({
  // Cart
  cartIsOpen: false,
  openCart: () => set({ cartIsOpen: true }),
  closeCart: () => set({ cartIsOpen: false }),

  // Nav
  navIsOpen: false,
  openNav: () => set({ navIsOpen: true }),
  closeNav: () => set({ navIsOpen: false }),

  // Shopify
  checkoutId: isBrowser ? window.localStorage.getItem('checkoutId') : '',
  setCheckoutId: id => {
    if (isBrowser) {
      window.localStorage.setItem('checkoutId', id.toString());
    }
    set({ checkoutId: id });
  },
  checkout: null,
  setCheckout: cart => set({ checkout: cart }),

  // Header animation
  headerAnimationComplete: false,
  setHeaderAnimationComplete: value => set({ headerAnimationComplete: value }),
}));

export default useStore;
