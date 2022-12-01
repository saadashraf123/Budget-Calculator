import React from "react";
import { useStateContext } from '../contexts/ContextProvider'

const Test = () => {
    const { clickHandler } = useStateContext();


    return (
        <div>
            <button onClick={clickHandler}>January</button>
            <div id="content" style={{ display: "block" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet deserunt, fugit consequatur nisi quasi tenetur totam vero adipisci expedita explicabo a iste, odio quidem incidunt nihil ducimus ea iusto aperiam!</div>
        </div>
    )
}


export default Test;