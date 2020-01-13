import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store';
import Test from './components/Test';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
          here we are
      </div>
      <Test />
    </Provider>
  );
}

export default App;
