import React,{useEffect} from 'react'
export default function Popup() {
    const [visible, setVisible] = React.useState(false);
    useEffect(()=>{
      let pop_status = localStorage.getItem('pop_status');
      if(!pop_status){
        setVisible(true);
        localStorage.setItem('pop_status',1);
      }
    },[])
    if(!visible) return null;

    return (
    <div>
        fadsfdsfdsfsafd
    </div>
    )
}