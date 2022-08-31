import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Login from './Login/Login';
import useToken from './useToken';


const CoinId = () => {

    const params = useParams()
    const id = params.id

    const [coinId, setCoinId] = useState([])
    const [description, setDescription] = useState("")
    const [coinLink, setCoinLink] = useState("")
    const [coinImage, setCoinImage] = useState("")

    const getCoinId = async () => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        const data = await response.json()
        console.log(data.description)
        setCoinId(data)
        setDescription(data.description.en)
        setCoinLink(data.links.homepage[0])
        setCoinImage(data.image.large)
    }

    const { token, setToken } = useToken();


    useEffect(() => {
        getCoinId()
    }, [])



    if(!token) {
      return <Login setToken={setToken} />
    }


    return (
        <div>
            <h1>{coinId.name}</h1>
            <p>{description}</p>
            <a href={coinLink}>The link</a>
            <p>Market Cap: {coinId.market_cap_rank}</p>
            <img src={coinImage} />
        </div>
    )
}

export default CoinId;