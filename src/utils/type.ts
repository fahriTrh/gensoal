export type QuestionItemType = {
    order: number;
    question: string;
    answer: string;
    option?: string[]; // Array jika pilihan ganda, opsional
    explan?: string; // Opsional
  };
  
export type QuestionList = QuestionItemType[]