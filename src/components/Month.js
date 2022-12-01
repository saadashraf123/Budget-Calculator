import Expenses from "./Expenses";
import { useStateContext } from '../contexts/ContextProvider'
import Button from "./Button";
import { useEffect } from "react";


const Month = () => {
    const { monthArr, clickHandler } = useStateContext();

    return (
        <div>
            {monthArr?.map((data, index) => (
                <div key={index}>
                    <Button handler={() => clickHandler(data.name)} color="purple" text={data.name} total={data.total} width="100%" />
                    <br />
                    <div id={data.name} style={{ display: "none" }}>
                        <Expenses
                            key={index}
                            month={data.name}
                        />

                    </div>
                </div>

            ))}
        </div>
    );
};

export default Month;
