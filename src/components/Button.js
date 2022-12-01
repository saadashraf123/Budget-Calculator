import React from "react";
const Button = ({ text, total, color, width, handler }) => {
    return (
        <>
            <button
                className="btn"
                style={{ backgroundColor: color, width: width }}
                onClick={handler}
            >
                <h4>{text}</h4>
                {total >= 0 && `Total Expense :  ${total}`}
            </button>
        </>
    );
};

export default Button;
