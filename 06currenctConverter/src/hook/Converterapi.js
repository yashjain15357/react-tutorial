import {useEffect,useState} from "react"
function apiCall(contry){
    const [data ,setData] =useState({})
    useEffect(()=>{

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-01-27/v1/currencies/${contry}.json`)
        .then((temp )=> temp.json())
        .then((temp)=> setData(temp[contry]))
        console.log(data);
    },[contry])
        return data
}
export default apiCall ;









// {
// 	"date": "2025-01-27",
// 	"usd": {
// 		"1inch": 3.26809994,
// 		"aave": 0.0032410278,
// 		"ada": 1.14297918,
// 		"aed": 3.6725,
// 		"afn": 75.73211701,
// 		"agix": 1.97249898,
// 		"akt": 0.38111884,