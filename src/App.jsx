import './App.css'
import { Provider } from 'react-redux';
import store from './components/store'; 
import Forms from './components/forms/Forms'
import Resume from './components/resume/Resume'
import ReactToPrint from 'react-to-print';

function App() {
  let componentRef = null;


  return (
    <Provider store={store}>
      <Forms />
      <div ref={(el) => (componentRef = el)}>
        <Resume />
      </div>
      <ReactToPrint
              trigger={() => {
                return <button className="btn btn-print">Print CV</button>;
              }}
              content={() => componentRef}
              documentTitle="Cv"
              pageStyle="print"
            />
    </Provider>
  )
}

export default App
