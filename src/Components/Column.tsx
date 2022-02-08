import { ColumnContainer, ColumnTitle, CardContainer } from "../styles"
import { Card } from "./Card";
import { AddNewItem } from "./AddItemButton";
import { useAppState} from "../State/AppStateContext";
import {addTask, moveList} from "../State/Actions";
import { useRef } from "react";
import { useItemDrag } from "../Utilities/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { isHidden } from "../Utilities/isHidden";


//WAITED PROPS BY THE COMPONENT Column
type ColumnProps = {
    text: string
    id: string
}

export const Column = ({ text, id }: ColumnProps) => {

    const { draggedItem, getTasksByListId, dispatch} = useAppState()
    const tasks = getTasksByListId(id)
    const ref = useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({
        accept: "COLUMN",
        hover: throttle(200, () => {
            if(!draggedItem) {
                return
            }
            if(draggedItem.type === "COLUMN") {
                if(draggedItem.id === id) {
                    return
                }

                dispatch(moveList(draggedItem.id, id))
            }
        })
    })
    const {drag} = useItemDrag({type: "COLUMN", id, text})
    drag(drop(ref))


    return (
        <ColumnContainer ref={ref}
        isHidden={isHidden(draggedItem, 'COLUMN', id)}>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map((task) => (
                <Card text={task.text}
                      columnId={id}
                      key={task.id}
                      id={task.id} />
            ))}

            <AddNewItem
                onAdd={(text) => dispatch(addTask(text, id))}
                toggleButtonText="+ ADD ANOTHER LIST"
                dark
            />
        </ColumnContainer>
    )
 }
