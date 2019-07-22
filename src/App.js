import React, {Suspense} from "react";
import {Store} from "./redux/store";
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import Bootstrap from "./routes/Bootstrap";

function App () {
  return (
    <Provider store = {Store}>
      <Router>
        <Suspense fallback = {<div>Carregando...</div>}>
          <Bootstrap/>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;