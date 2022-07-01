import React, { useEffect,  useState } from "react";
import Axios from 'axios';
import ScoopOption from "./ScoopOption";

export const Options = ({ optionType }) => {
    const [ items, setItems ] = useState([]);
    //optionType is 'scoops' or 'toppings'
    useEffect(() => {
        Axios.get(`http://localhost:3030/${optionType}`)
        .then((response) => {
            setItems(response.data);
        })
        .catch((error) => {
            //TODO: handle error response
            console.log(error);
        })
    }, [optionType])

  return <div>Options</div>;
};
