import React from 'react';
import { useStateContext } from '../contexts/ContextProvider'
import Expense from "./Expense";

const Expenses = ({ month }) => {
    const { expense } = useStateContext();

    return (
        <>
            {expense?.map((data, index) => (
                <div key={index}>
                    {month == data.name &&
                        <>
                            <Expense
                                key={index}
                                data={data}
                            />
                        </>
                    }
                </div>
            ))}
        </>
    );
};

export default Expenses;
