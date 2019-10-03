import './globals.css';

import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Bootstrap from 'routes/Bootstrap';
import ReduxProvider from 'utils/redux/store';
import GlobalContext from './GlobalContext';
import GlobalRouter from './GlobalRouter';
import Header from 'component/Header';
import LoadingBar from 'component/LoadingBar';
import Body from 'component/Body';

function App () {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <GlobalRouter/>
        <GlobalContext>
					<Header isLogin={true}/>
					<Body>
            <Suspense fallback = {<LoadingBar/>}>
              <Bootstrap/>
            </Suspense>
          </Body>
        </GlobalContext>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
