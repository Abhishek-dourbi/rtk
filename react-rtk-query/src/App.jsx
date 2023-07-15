import Data from '../components/Data';
import './App.css'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { productsApi } from '../features/apiSlice';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
      <Provider store={store}>
        <ApiProvider api={productsApi}> 
          <Data />
        </ApiProvider>
      </Provider>
  )
}

export default App
