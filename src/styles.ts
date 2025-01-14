import styled from 'styled-components';

//STYLE FOR THE APP CONTAINER
export const AppContainer = styled.div `
align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 50px;
  width: 100%;
`



//STYLE FOR COLUMN TASKLIST CONTAINER
export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`





//USE IT FOR LIST AND TASKS BUTTON
//DARK IF IT'S ON GREY BACKGROUND
//WHITE IF IT'S ON BLUE BACKGROUND

type AddItemButtonProps = {
    dark?: boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
    background-color: #ffffff3d;
    border-radius: 3px;
    border: none;
    color: ${(props) => (props.dark ? "#000" : "#fff")};
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    transition: background 85ms ease-in;
    width: 100%;
 &:hover {
 background-color: #ffffff52;
 }
`

export const NewItemFormContainer = styled.div`
 max-width: 300px;
 display: flex;
 flex-direction: column;
 width: 100%;
 align-items: flex-start;
`

export const NewItemButton = styled.button`
 background-color: #5aac44;
 border-radius: 3px;
 border: none;
 box-shadow: none;
 color: #fff;
 padding: 6px 12px;
 text-align: center;
`
export const NewItemInput = styled.input`
 border-radius: 3px;
 border: none;
 box-shadow: #091e4240 0px 1px 0px 0px;
 margin-bottom: 0.5rem;
 padding: 0.5rem 1rem;
 width: 100%;
`

interface DragPreviewContainerProps {
     isHidden?: boolean
        isPreview?:boolean
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
 opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
`

//STYLE FOR THE TASKLIST
export const ColumnContainer = styled(DragPreviewContainer) `
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`

//STYLE FOR CARDS
export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`
