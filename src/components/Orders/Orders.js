import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Orders.css'
import {dataB} from '../../firebase';
import { useStateValue } from '../../StateProvider';
import Button from '@material-ui/core/Button';
  

function getDifferenceInMinutes(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60);
  }
  
  function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    
    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;
    
    return minutes;
    }  
// function getMinutesDiff(startTime,endTime){
//     var todayDate = moment(new Date()).format("MM-DD-YYYY"); //Instead of today date, We can pass whatever date        

//     var startDate = new Date(`${todayDate} ${startTime}`);
//     var endDate = new Date(`${todayDate } ${endTime}`);
//     var timeDiff = Math.abs(startDate.getTime() - endDate.getTime());

//     var hh = Math.floor(timeDiff / 1000 / 60 / 60);   
//     hh = ('0' + hh).slice(-2)
   
//     timeDiff -= hh * 1000 * 60 * 60;
//     var mm = Math.floor(timeDiff / 1000 / 60);
//     mm = ('0' + mm).slice(-2)

//     timeDiff -= mm * 1000 * 60;
//     var ss = Math.floor(timeDiff / 1000);
//     ss = ('0' + ss).slice(-2)

// }
function calculateTime(d1,d2) {
    //get values
var valuestart =d1;
var valuestop =d2;

    //create date format       
var timeStart = new Date("01/01/2007 " + valuestart);
var timeEnd = new Date("01/01/2007 " + valuestop);

var difference = timeEnd - timeStart;            
var diff_result = new Date(difference);    
var diffMin=diff_result.getMinutes();
var hourDiff = diff_result.getHours();
return diffMin         
}

function Orders() {
    const [orders,setOrders]=useState([])
    const [counter, setCounter] = React.useState(60*2);
    const [calcTime, setCalcTime] = useState();
    const[{user},dispatch]=useStateValue('')
    const [diffTime, setDiffTime] = useState(null);



    var currentdate = new Date(); 
    var date = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear()  
    var time=   currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    
    const url=`https://my-food-menu-55e8d-default-rtdb.firebaseio.com/orders`
    useEffect(()=>{
        axios.get('https://my-food-menu-55e8d-default-rtdb.firebaseio.com/orders.json')
        .then(res=>{
            const fetchOrders=[];
            for(let key in res.data ){
                fetchOrders.push({
                    ...res.data[key],
                    id:key
                });
            }
            setOrders(fetchOrders)
        })
        .catch(err=>{
                console.log(err)
        });

        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

    },[counter])


    const cancleRecentBasket=(date1,date2,itemid)=>{
        var time_start = new Date();
        var time_end = new Date();
        var value_start = date1.split(':');
        var value_end =date2.split(':');

        time_start.setHours(value_start[0], value_start[1], value_start[2], 0)
        time_end.setHours(value_end[0], value_end[1], value_end[2], 0)

        var min =(time_end - time_start)/(1000*60) // millisecond 
        var value = Math.abs(min);  
        setCalcTime(value)

        if(value<3){
            dataB.ref(`/orders/${itemid}`).remove()
        }
        else{
            alert('Time has Expired !! Your Food has set to be cooked')
            setCalcTime(5)
        }

    }

    const timeeee=parseInt(calcTime);
  
    return (
                    <div>
    {!user?<h1>Please Login First to See Your Previous Orders</h1>:
    <div>
        <h3>Your Timer To Cancle Your Food: {counter} !seconds</h3>
        {orders.map((item,index)=>{
                    return(
                               <div style={{border:'1px solid black',marginLeft:'15%',marginRight:'15%',marginTop:'5%'}}>     

                  <h1 style={{textAlign:'center'}}>You Orders on :{item.fulldate} @ {item.fulltime}</h1>
                            <div>
                                 <h4 style={{textAlign:'center'}}>You can Cancle your Order Within 2 Minutes</h4>
                                 <div className="cancle_div">
                                        <Button className="cancle_btn"
                                         variant="outlined" 
                                          onClick={()=>cancleRecentBasket(time,item.fulltime,item.id)} 
                                
                                          >
                                              Cancle Order
                                        </Button>
                                  </div>
                                
                            </div>
                        
                            {item.basket.map((basketItem,i)=>
                            <div key={i}>
                            <figure className="pizza2 ml-auto mr-auto" >

                            <div className="pizza__hero">
                            <img alt="Pizza" src={basketItem.img} className="pizza__img"/>
                            </div>

                            <div className="pizza__content">
                            <div className="pizza__title">
                            <h1 className="pizza__heading">{basketItem.name} 👌</h1>
                            <div className="pizza__tag pizza__tag--1">#vegetarian</div>
                            <div className="pizza__tag pizza__tag--2">#italian</div>
                            </div>
                            <p className="pizza__description">
                            Yummy veggie pizza with tasty olives, crisp peppers, fresh arugula and original italian         tomato sauce.
                            </p>
                            <div className="pizza__details">
                            <p className="pizza__detail"><span className="emoji">🍕</span>850 kcal</p>
                            <p className="pizza__detail"><span className="emoji">⏱</span>30 min</p>
                            <p className="pizza__detail"><span className="emoji">⭐️</span>4.7 / 5</p>
                            </div>
                            <div className="display-flex">
                            <span className="pizza__price">${basketItem.price}</span>
                            </div>

                            </div>
                            </figure>
                        </div>
                      )}
        </div>
    

                 ) })}
    </div>
    }
</div>
)
}

export default Orders
