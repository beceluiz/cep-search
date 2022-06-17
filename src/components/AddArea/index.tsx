import { AddAreaContainer } from "./styles";
import { AiOutlinePlusCircle } from "react-icons/ai"

export function AddArea () {
    return <AddAreaContainer>
        <AiOutlinePlusCircle className="plusButton"/>
        <input className="addNewTaskInput"
        type="text"
        placeholder="add a new task"

         />
    </AddAreaContainer>
}