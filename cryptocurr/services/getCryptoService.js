import axios from 'axios';


export const getData = async ()=>{
 

  try{
//make api call 
const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d")
const data = res.data
return data;


  }catch(err){
    console.log(err.message)
  }
}