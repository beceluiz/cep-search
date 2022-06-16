import { ListItemContainer } from "./styles";
import {Item} from "../../types/Item"

type Props = {
    item: Item,
}

export function ListItem ({item}: Props) {
    return <ListItemContainer>
        <input type="checkbox"/>
        <label>{item.name}</label>
    </ListItemContainer>
}