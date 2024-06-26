// import React, { useState } from "react";
import edit from "@assets/icons/brownEdit.svg";
import Tiptap from "./TextEditor";
// import { Button } from "../ui/button";
// interface FAQ {
//   question: string;
//   answer: string;
// }
type props = {
  faqs: {
    question: string;
    answer: string;
  }[];
};
const FAQSection: React.FC<props> = ({ faqs }) => {
  //   const [questions, setQuestions] = useState<FAQ[]>([]);
  //   const [editingIndex, setEditingIndex] = useState<number | null>(null);
  //   const [inputQuestion, setInputQuestion] = useState("");
  //   const [answer, setAnswer] = useState("");

  //   const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setInputQuestion(e.target.value);
  //   };

  //   const handleAnswerChange = (content: string) => {
  //     setAnswer(content);
  //   };

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     if (editingIndex !== null) {
  //       const updatedQuestions = [...questions];
  //       updatedQuestions[editingIndex] = {
  //         question: inputQuestion,
  //         answer: answer,
  //       };
  //       setQuestions(updatedQuestions);
  //       setEditingIndex(null);
  //     } else {
  //       setQuestions([...questions, { question: inputQuestion, answer }]);
  //     }
  //     setInputQuestion("");
  //     setAnswer("");
  //   };

  //   const handleEdit = (index: number) => {
  //     const { question, answer } = questions[index];
  //     setInputQuestion(question);
  //     setAnswer(answer);
  //     setEditingIndex(index);
  //   };

  //   const handleDelete = (index: number) => {
  //     const updatedQuestions = [...questions];
  //     updatedQuestions.splice(index, 1);
  //     setQuestions(updatedQuestions);
  //   };

  return (
    <section className="flex gap-8 ">
      <div className=" max-w-[638px]  ">
        {faqs?.map((elem) => (
          <>
            <div className="flex justify-between">
              <h2>{elem?.question}</h2>
              <img src={edit} alt="edit btn" className="cursor-pointer" />
            </div>
            <p className="text-sm text-[#667085] py-3  border-b border-[#EAECF0]">
              {elem?.answer}
            </p>
          </>
        ))}
      </div>
      <div className=" border-l border-[#EAECF0] px-8 h-fit w-full">
        <h2 className="text-3xl text-[#946C3C] mb-3">FAQ Editor</h2>
        <div className="grid items-center gap-2 ">
          <label htmlFor="question">Question</label>
          <input
            id="question"
            placeholder="Enter a question"
            className="outline-none border w-full border-[#EAECF0] h-12 px-3 pt-0 placeholder:text-[#667085]"
          />
        </div>
        <div className="grid mt-3 items-center gap-2 ">
          <label htmlFor="question" className="mb-16">
            Answer
          </label>
          <Tiptap />
          <button className="uppercase h-14 bg-[#946C3C] text-white mt-3">
            Save Question
          </button>
        </div>
      </div>
    </section>
    // <div>{questions.length === 0 ? "no question" : "questions dey"}</div>
    // <div>
    //   <div>
    //       <h2>FAQ Section</h2>
    //   </div>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Enter your question"
    //       value={inputQuestion}
    //       onChange={handleQuestionChange}
    //     />
    //     <textarea
    //       placeholder="Enter your answer"
    //       value={answer}
    //       onChange={(e) => handleAnswerChange(e.target.value)}
    //     ></textarea>
    //     <button type="submit">
    //       {editingIndex !== null ? "Update" : "Add"}
    //     </button>
    //   </form>
    //   <ul>
    //     {questions.map((q, index) => (
    //       <li key={index}>
    //         <div>{q.question}</div>
    //         <div>{q.answer}</div>
    //         <button onClick={() => handleEdit(index)}>Edit</button>
    //         <button onClick={() => handleDelete(index)}>Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default FAQSection;
