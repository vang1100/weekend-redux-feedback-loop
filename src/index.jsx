// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './components/App/App';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import App from './components/App/App';

const feedbacklist = (state =[], action) => {
    if (action.type === 'FEEDBACK_LIST_SET') {
        return action.payload;
    }
        return state;
}

const reduxStore = createStore(
    combineReducers({
      feedbacklist
    }),
    applyMiddleware(logger)
  );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <Provider store={reduxStore}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Provider store={reduxStore}>
        <App />
    </Provider>
        
    </React.StrictMode>
);
