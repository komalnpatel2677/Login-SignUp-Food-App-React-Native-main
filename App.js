
import React from 'react';
import {Provider} from 'react-redux';
import customStore from './components/redux/store';
import AppNavigation from './navigation/AppNavigation';


const App=()=> {
  return (
    <Provider store={customStore}>
      <AppNavigation/>
    </Provider>
  );
};
export default App;


