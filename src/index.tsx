import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import { App } from './App';
import {AppStateProvider} from "./State/AppStateContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend"


ReactDOM.render(
  <React.StrictMode>
      <DndProvider backend={Backend} >
          <AppStateProvider>
              <App />
          </AppStateProvider>
      </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

