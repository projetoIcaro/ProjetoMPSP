import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Bootstrap from 'routes/Bootstrap';
import ReduxProvider from 'utils/redux/store';
import GlobalContext from './GlobalContext';
import GlobalRouter from './GlobalRouter';

function App () {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <GlobalRouter/>
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
