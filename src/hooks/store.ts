import create from 'zustand';

const [useStore] = create(set => ({
  cartIsOpen: false,
  openCart: () => set({ cartIsOpen: true }),
  closeCart: () => set({ cartIsOpen: false }),
}));

export default useStore;
