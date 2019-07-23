import React, {Suspense} from "react";
import {Store} from "./redux/store";
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import Bootstrap from './routes/Bootstrap';
import GlobalContext from './GlobalContext';

function App () {
  return (
    <Provider store = {Store}>
      <Router>
        <GlobalContext>
          <Suspense fallback = {<div>Carregando...</div>}>
            <Bootstrap/>
          </Suspense>
        </GlobalContext>
      </Router>
    </Provider>
  );
}

export default App;