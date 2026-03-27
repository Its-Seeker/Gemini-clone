import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

  const onSent = async (prompt) => {
    const[input,setinput] = useState("");
    const[recentPrompt,setrecentPrompt] = useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const[showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const[resultData,setResultData] = useState("");
    try {
      const response = await runChat(prompt);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };
    // onSent ("what is react js")
  const contextValue = {
    
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;