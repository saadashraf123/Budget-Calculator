import { useStateContext } from '../contexts/ContextProvider'


const AddExpense = () => {
    const { title, amount, month, setTitle, setAmount, setMonth, Submitted } = useStateContext();
    return (
        <form className="add-form" onSubmit={Submitted}>
            <h3>Add New Expense</h3>
            <div className="form-control">
                <label>Expense: </label>
                <input
                    type="text"
                    placeholder="Add an Expense"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Amount: </label>
                <input
                    type="number"
                    placeholder="Add an Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Date: </label>
                <input
                    type="date"
                    placeholder="Add a Date"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                />
            </div>
            <input type="submit" className="btn btn-block" value="Add Expense" />
        </form>
    );
};

export default AddExpense;
