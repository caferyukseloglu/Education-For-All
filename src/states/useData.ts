import create from 'zustand';
type State = {
  userdata: any;
  setData: (data: any) => void;
  cleanData: () => void;
}
export const useUserData = create<State>(set => ({
  userdata: {},
  setData: (data) => set({ userdata: data }),
  cleanData: () => set({ userdata: {} })
}))