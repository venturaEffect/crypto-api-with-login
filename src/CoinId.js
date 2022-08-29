import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";


const CoinId = () => {

    const params = useParams()
    const id = params.id

    const [coinId, setCoinId] = useState([])
    const [description, setDescription] = useState("")

    const getCoinId = async () => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        const data = await response.json()
        console.log(data.description)
        setCoinId(data)
        setDescription(data.description.en)
    }

    useEffect(() => {
        getCoinId()
    }, [])

    return (
        <div>
            <Navbar />
            <h1>This is a test 2</h1>
            <p>{description}</p>
        </div>
    )
}

export default CoinId;