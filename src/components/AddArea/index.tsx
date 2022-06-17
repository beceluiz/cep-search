import { AddAreaContainer } from "./styles";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { useState, KeyboardEvent } from "react";


type addAreaProps = {
    onEnter: (taskName: string) => void;
}

export function AddArea ({onEnter}:addAreaProps) {
const [inputText, setInputText] = useState('')

const handleKeyUp = (event: KeyboardEvent) => {
    if(event.code === 'Enter' && inputText !== '') {
        onEnter(inputText)
}
}
    return(<AddAreaContainer>
        <AiOutlinePlusCircle className="plusButton"/>
        <input className="addNewTaskInput"
        type="text"
        placeholder="add a new task"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        onKeyUp={handleKeyUp}
         />
    </AddAreaContainer>)
}