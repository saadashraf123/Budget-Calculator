import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [expense, setExpense] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [monthArr, setMonthArr] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [showAddMonth, setShowAddMonth] = useState(false);
    const [month, setMonth] = useState("");
    const [monthName, setMonthName] = useState("");
    const [total, setTotal] = useState(10);


    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/saadashraf123/budgetCalculator-jsonserver/record")
            .then(response => {
                setExpense(response.data)
            })
        axios.get("https://my-json-server.typicode.com/saadashraf123/budgetCalculator-jsonserver/months")
            .then(response => {
                setMonthArr(response.data)
            })
    }, [total])

    const Submitted = (e) => {
        e.preventDefault();
        if (monthName) {
            const name = getMonthName(monthName)
            const test = monthArr.some((item) => item.name == name)
            if (test === false) {
                const total = 0
                onAddMonth({ name, total })
            }
            setShowAddMonth(false)
            setMonthName("")
        }
        else if (!title || !amount || !month) {
            alert("Please enter the values");
            return;
        }

        else {
            const name = getMonthName(month)
            const test = monthArr.some((item) => item.name == name)
            if (test === true) {
                const data = { title, amount, month, name };
                onAddExpense(data);
                calculateTotal(data, "add");
            }
            else {
                alert("Add the month first")
            }
            setTitle("");
            setAmount(0);
            setMonth("");
            setShowAdd(false)

        }
    };



    const getMonthName = (monthName) => {
        var date_split1 = monthName.split('-');
        var date_split2 = date_split1[1];

        const date = new Date();
        date.setMonth(date_split2 - 1);
        return date.toLocaleString('en-US', { month: 'long' });
    }

    const onAddExpense = (recentExpense) => {
        const id = Math.floor(Math.random() * 100) + 1;
        const newExpense = { id, ...recentExpense };
        axios.post("https://my-json-server.typicode.com/saadashraf123/budgetCalculator-jsonserver/record/", newExpense)
            .then(response => {
                setExpense([...expense, response.data])
            })
    };

    const onAddMonth = (newData) => {
        const id = Math.floor(Math.random() * 100) + 1;
        const newMonth = { id, ...newData };
        axios.post("https://my-json-server.typicode.com/saadashraf123/budgetCalculator-jsonserver/months/", newMonth)
            .then(response => {
                setMonthArr([...monthArr, response.data])
            })
    };

    const onDelete = (id) => {
        const test = expense.find((item) => {
            return item.id == id
        })
        axios.delete("https://my-json-server.typicode.com/saadashraf123/budgetCalculator-jsonserver/record/" + id)
            .then(response => {
                setExpense(expense.filter((expense) => expense.id !== id));
                calculateTotal(test, "delete");
            })
    };

    const clickHandler = (data) => {
        const content = document.getElementById(data)
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }

    const calculateTotal = (recentExpense, param) => {
        const expenseTotal = recentExpense.amount;
        const monthName = recentExpense.name;

        let totalAmount = 0;

        const test = monthArr.find((item) => {
            return item.name == monthName
        })

        const monthId = test.id;
        if (param == "add") {
            totalAmount = parseInt(test.total) + parseInt(expenseTotal)
        }
        else if (param == "delete") {
            totalAmount = test.total - expenseTotal
        }
        axios.put("https://my-json-server.typicode.com/saadashraf123/budgetCalculator-jsonserver/months/" + monthId, {
            ...test, total: totalAmount,
        })
            .then(response => {
                setTotal(totalAmount);
            })

    }

    return (
        <StateContext.Provider value={{ expense, monthArr, Submitted, showAdd, setShowAdd, title, amount, setTitle, setAmount, month, setMonth, clickHandler, onDelete, calculateTotal, total, showAddMonth, setShowAddMonth, monthName, setMonthName }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)