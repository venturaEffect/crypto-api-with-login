import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const Coin = ({name, image, coin_id}) => {

    return (
        <div key={coin_id}>
            <h2>{name}</h2>
            <img src={image} />
        </div>
    )
}

export default Coin;