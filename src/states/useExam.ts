import create from 'zustand';
type State = {
  examdata: any;
  setExamData: (data: any) => void;
  cleanData: () => void;
}
export const useExamData = create<State>((set) => ({
  examdata: {},
  setExamData: (data) => set({ examdata: data }),
  cleanData: () => set({examdata: {}}),
}))