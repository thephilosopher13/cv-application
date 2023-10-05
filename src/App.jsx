import './App.css'
import { Provider } from 'react-redux';
import store from './store'; 
import Forms from './components/forms/Forms'
import Resume from './components/resume/Resume'

function App() {
  return (
    <Provider store={store}>
      <Forms />
      <Resume />
    </Provider>
  )
}

export default App
