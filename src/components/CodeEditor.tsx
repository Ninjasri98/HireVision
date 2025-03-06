import { CODING_QUESTIONS, LANGUAGES } from '@/constants'
import React, { useState } from 'react'

function CodeEditor() {
    const [selectedQuestion, setSelectedQuestion] = useState(CODING_QUESTIONS[0])
    const [language, setLanguage] = useState<"javascript" | "python" | "java" >(LANGUAGES[0].id);
    const [code, setCode] = useState(selectedQuestion.starterCode[language])

    const handleQuestionChange = (questionId : string) =>{
        const question = CODING_QUESTIONS.find((q)=> q.id === questionId)!;
        setSelectedQuestion(question)
        setCode(question?.starterCode[language])
    }

    const handleLanguageChange = (newLanguage: "javascript" | "python" | "java") => {
        setLanguage(newLanguage);
        setCode(selectedQuestion.starterCode[newLanguage]);
      };


  return (
    <div>CodeEditor</div>
  )
}

export default CodeEditor