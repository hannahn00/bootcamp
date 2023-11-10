import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';

import { Provider } from 'react-redux';
// import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxHdnX1mQgzNmI4hTA45WX_aImsdsuKTM",
    authDomain: "bootcamp-5a105.firebaseapp.com",
    databaseURL: "https://bootcamp-5a105-default-rtdb.firebaseio.com",
    projectId: "bootcamp-5a105",
    storageBucket: "bootcamp-5a105.appspot.com",
    messagingSenderId: "607512362133",
    appId: "1:607512362133:web:4765beba456b3c7d892f9c",
    measurementId: "G-K2DS53485G"
  };

firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
  });
  
  // Create store with reducers and initial state
  const store = createStore(rootReducer());
  
  // react-redux-firebase config
  const rrfConfig = {
    userProfile: 'users',
  };
  
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
  };

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
                <App /> 
            </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);