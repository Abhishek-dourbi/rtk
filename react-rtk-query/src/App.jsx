import Data from '../components/Data';
import './App.css'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { productsApi } from '../features/apiSlice';

function App() {
  return (
      <ApiProvider api={productsApi}> 
        <Data />
      </ApiProvider>
  )
}

export default App
