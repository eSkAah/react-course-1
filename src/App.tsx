import { AppContainer } from './styles';
import { Column} from "./Components/Column";
import { AddNewItem } from "./Components/AddItemButton";
import { useAppState} from "./State/AppStateContext";
import { addList } from "./State/Actions";

export const App = () => {
    const { lists, dispatch } = useAppState()

     return (
         <AppContainer>
             {lists.map((list:any) => (
                 <Column text={list.text} key={list.id} id={list.id} />
             ))}
             <AddNewItem
                 onAdd={(text) => dispatch(addList(text))}
                 toggleButtonText='+ ADD ANOTHER LIST'
             />
         </AppContainer>
     )
}
