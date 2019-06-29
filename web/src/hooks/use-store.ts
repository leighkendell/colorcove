import create from 'zustand';

// FIXME: Look at why any is required here
const [useStore] = create<any>(set => ({
  cartIsOpen: false,
  openCart: () => set({ cartIsOpen: true }),
  closeCart: () => set({ cartIsOpen: false }),
  navIsOpen: false,
  openNav: () => set({ navIsOpen: true }),
  closeNav: () => set({ navIsOpen: false }),
}));

export default useStore;
