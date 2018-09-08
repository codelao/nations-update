import React from "react";
import TableItem from "./TableItem";

 const Table = ({responses}) => {
    return (<div>
        {responses.map((response, i) => {
            console.log(i)
            return(<TableItem response={response} key={i}/>)
        })}
    </div>)
}

export default Table