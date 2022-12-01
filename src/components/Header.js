import { useStateContext } from "../contexts/ContextProvider";
import Button from "./Button";
const Header = () => {

    const { showAdd, setShowAdd, setShowAddMonth, showAddMonth, monthArr } = useStateContext();
    return (
        <div className="mainTitle">
            <header className="header">
                <h1 className="">Budget Calculator</h1>
                {monthArr.length > 0 &&
                    <Button handler={() => setShowAdd(!showAdd)} color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add Expense"} width="35%" />
                }
                <Button handler={() => setShowAddMonth(!showAddMonth)} color={showAddMonth ? "red" : "green"} text={showAddMonth ? "Close" : "Add Month"} width="35%" />
            </header>
        </div>
    );
};

export default Header;
