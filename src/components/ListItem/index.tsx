import { ListItemContainer } from "./styles";
import {Item} from "../../types/Item"
import { useState } from "react";

type Props = {
    item: Item,
}

export function ListItem ({item}: Props) {
const [isChecked, setIsChecked] = useState(item.done)

    return <ListItemContainer done={isChecked}>
        <input type="checkbox" 
        checked={isChecked} 
        onChange={event => setIsChecked(event.target.checked)}
        
        />
        <label>{item.name}</label>
    </ListItemContainer>
}