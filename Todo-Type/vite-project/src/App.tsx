import './App.css';
import MainTodo from './components/MainTodo';
import { AppDataProvider } from './components/NewContext';

function App() {
  return (
    <>
      <AppDataProvider>
        <MainTodo />
      </AppDataProvider>
    </>
  );
}

export default App;
