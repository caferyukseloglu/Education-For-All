import create from 'zustand';
type State = {
  examdata: any;
  setExam: (data: any) => void;
  cleanExam: () => void;
}
export const useExamData = create<State>((set) => ({
  examdata: {},
  setExam: (data) => set({ examdata: data }),
  cleanExam: () => set({examdata: {}}),
}))