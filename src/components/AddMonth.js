import { useStateContext } from '../contexts/ContextProvider'


const AddMonth = () => {
    const { monthName, setMonthName, Submitted } = useStateContext();
    return (
        <form className="add-form" onSubmit={Submitted}>
            <h3>Add New Month</h3>
            <div className="form-control">
                <label>Month</label>
                <input
                    type="month"
                    placeholder="Add a Month"
                    value={monthName}
                    onChange={(e) => setMonthName(e.target.value)}
                />
            </div>
            <input type="submit" className="btn btn-block" value="Add Month" />
        </form>
    );
};

export default AddMonth;
