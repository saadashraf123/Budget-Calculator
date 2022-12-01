import { useStateContext } from '../contexts/ContextProvider'

const Task = ({ data }) => {

    const { setName, setMonth, setAmount, onDelete } = useStateContext();
    return (
        <div className="task">
            <p>
                Expense: {data.title}
                <br />
                Amount: {data.amount} Rs
                <br />
                Date: {data.month}
                <br />
                {/* <input type="text" value={data.title} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={data.amount} onChange={(e) => setAmount(e.target.value)} />
                <input type="date" value={data.month} onChange={(e) => setMonth(e.target.value)} /> */}
                <i
                    className="fas fa-times"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(data.id)}
                ></i>
            </p>
        </div>
    );
};

export default Task;
