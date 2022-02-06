import {createContext, useContext, FC, Dispatch} from "react";
import { appStateReducer, AppState, List, Task} from "./AppStateReducer";
import {Action} from "./Actions";
import { useImmerReducer } from "use-immer";
import {DragItem} from "../DragItem";


type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
    draggedItem: DragItem | null
}

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)

const appData: AppState = {
     lists: [],
    draggedItem: null
}

export const AppStateProvider: FC = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    const { draggedItem, lists } = state

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch, draggedItem }}> {children} </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}