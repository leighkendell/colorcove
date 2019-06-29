import create from 'zustand';

const [useStore] = create(set => ({
  cartIsOpen: false,
  openCart: () => set({ cartIsOpen: true }),
  closeCart: () => set({ cartIsOpen: false }),
  navIsOpen: false,
  openNav: () => set({ navIsOpen: true }),
  closeNav: () => set({ navIsOpen: false }),
}));

export default useStore;
