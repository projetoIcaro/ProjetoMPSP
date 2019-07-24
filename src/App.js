import React, { Suspense } from "react";
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import ReduxProvider from './redux/store';
import Bootstrap from './routes/Bootstrap';

function App () {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <GlobalContext>
          <Suspense fallback = {<div>Carregando...</div>}>
            <Bootstrap/>
          </Suspense>
        </GlobalContext>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;