import { useState } from "react"
import { AddItemButton } from "../styles"
import {NewItemForm} from "./NewItemForm";

//PROPS DEFINITIONS
type AddNewItemProps = {
     onAdd(text: string): void
     toggleButtonText: string
     dark?: boolean
}


//COMPONENT
export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const { onAdd, toggleButtonText, dark} = props

    //IF SHOWFORM = TRUE SHOW FORM'S INPUT
    if(showForm) {
        return (
            <NewItemForm onAdd={(text) => {
                    onAdd(text)
                    setShowForm(false)
                }}
            />
        )

    }

    return (
        //ONCLICK SHOW FORM INPUT BY THE setShowForm Hook
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}
