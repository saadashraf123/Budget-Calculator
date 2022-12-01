import './App.css';
import AddExpense from './components/AddExpense';
import { useStateContext } from './contexts/ContextProvider'
import Month from './components/Month';
import Header from './components/Header';
import AddMonth from './components/AddMonth';



function App() {
    const { showAdd, showAddMonth } = useStateContext();
    return (
        <div className="container">
            <Header />
            {showAdd &&
                <AddExpense />
            }
            {showAddMonth &&
                <AddMonth />
            }
            <Month />


        </div>
    );
}

export default App;
