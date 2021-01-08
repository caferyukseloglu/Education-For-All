import create from 'zustand';
type State = {
  examdata: any;
  setExam: (data: any) => void;
  cleanExam: () => void;
};
export const useExamData = create<State>((set) => ({
  examdata: [],
  setQuestion: (data, state) => {
    const uzunluk = state.lenght;
    set({examdata: [...state, data]});
    return uzunluk;
  },
  setAnswers: (data:any, key: number, state: any) => {
    const newExamData = (state[key].answers = [...state[key].answers, data]);
    set({examdata: newExamData});
  },
  setExam: (data) => set({examdata: data}),
  cleanExam: () => set({examdata: {}}),
}));

// const questions = [
//   {
//     name: "BURASİ GUZEL Mİ",
//     answers: [
//       {title: 'evet', correct: true},
//       {title: 'hayir', correct: false},
//       {title: 'bilmenme', correct: false}
//     ]
//   },
//   {
//     name: "cafer nasil biri",
//     answers: [
//       {title: 'iyi', correct: false},
//       {title: 'kotuy', correct: false},
//       {title: 'kararsiz', correct: true}
//     ]
//   }
// ]
