import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Coin from "./Coin"



const Trending = () => {

    const [coins, setCoins] = useState([])

    const getCoins = async () => {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
        const data = await response.json()
        console.log(data)
        setCoins(data.coins)
    }

    useEffect(() => {
        getCoins()
    }, [])

    return (
        <div>
            {coins.map(coin => 
                <Link to={`/trending/${coin.item.id}`} >
                    <Coin 
                        name={coin.item.name}
                        image={coin.item.large}
                    />
                </Link>
            )}
        </div>

    )
}

export default Trending;