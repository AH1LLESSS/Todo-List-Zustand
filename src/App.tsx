import ReactDOM from 'react-dom/client';
import './App.scss'
import { TodoListCore } from './assets/Components/Global';


function App() {

  return (
    <>
      <TodoListCore />
    </>
  )
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

ReactDOM.createRoot(rootElement).render(<App />);


