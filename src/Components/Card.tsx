import {CardContainer} from "../styles";
import { useRef } from 'react';
import { useItemDrag } from '../Utilities/useItemDrag'
import { useDrop } from "react-dnd"
import { useAppState } from "../State/AppStateContext"
import { isHidden } from "../Utilities/isHidden"
import { moveTask, setDraggedItem } from "../State/Actions"
import { throttle } from "throttle-debounce-ts"

type CardProps = {
    text:string
    id:string
    columnId: string
    isPreview?: boolean
}

export const Card = ({text, id, columnId, isPreview}:CardProps) => {

    const { draggedItem, dispatch } = useAppState()
    const ref = useRef<HTMLDivElement>(null)

    const { drag } = useItemDrag({
        type: "CARD",
        id,
        text,
        columnId
    })

    const [, drop] = useDrop({
        accept: "CARD",
        hover: throttle(200, () => {
        if (!draggedItem) {
            return
            }
        if (draggedItem.type !== "CARD") {
            return
            }
        if (draggedItem.id === id) {
            return
            }
        dispatch(
            moveTask(draggedItem.id, id, draggedItem.columnId, columnId)
        )
        dispatch(setDraggedItem({ ...draggedItem, columnId }))
        })
    })

    drag(drop(ref))

    return(
        <CardContainer
            isPreview={isPreview}
            ref={ref}
        >{text}
        </CardContainer>
    )
}