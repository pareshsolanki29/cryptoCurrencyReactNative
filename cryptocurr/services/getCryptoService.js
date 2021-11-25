import axios from 'axios';
import moment from 'moment'



  const formatSparkLine = (num) =>{
   const sevenDaysAgo = moment().subtract( 7, 'days').unix();
   let formattedSparkline =  num.map((item, i)=>{
     return {
       x:  sevenDaysAgo +(i +1) * 3600,
       y: item,
     }
   })
   return formattedSparkline;
  }

const formatData =(data)=>{
  let frommattedData = [];
  data.forEach(item=>{
    const formattedSparkline = formatSparkLine(item.sparkline_in_7d.price)
    const formattedItem = {
      ...item,
      sparkline_in_7d: {
        formattedSparkline
      }
    }
    frommattedData.push(formattedItem)
  })
  return frommattedData
}

export const getData = async ()=>{
 

  try{
//make api call 
const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d")
const data = res.data
const formattedResponse = formatData(data)
return formattedResponse
  }catch(err){
    console.log(err.message)
  }
}