import Data from '../components/Data';
import './App.css'
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
      <Provider store={store}>
        <Data />
      </Provider>
  )
}

export default App
