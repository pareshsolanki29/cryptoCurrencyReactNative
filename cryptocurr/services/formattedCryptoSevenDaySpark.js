import {getData} from './cryptoService';
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


export const formmattedSevenDayData = () => {
  const formattedResponse = formatData(getData)
  return formattedResponse
}