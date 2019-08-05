import create from 'zustand';
import { isBrowser } from '../utils/helpers';
import { Cart } from 'shopify-buy';

const [useStore] = create(set => ({
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
  setCheckoutId: (id: Cart['id']) => {
    if (isBrowser) {
      window.localStorage.setItem('checkoutId', id.toString());
    }
    set({ checkoutId: id });
  },
  checkout: null as Cart | null,
  setCheckout: (cart: Cart) => set({ checkout: cart }),

  // Header animation
  headerAnimationComplete: false,
  setHeaderAnimationComplete: (value: boolean) =>
    set({ headerAnimationComplete: value }),
}));

export default useStore;
