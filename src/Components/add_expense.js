
import './add_expense.css'
import React,{useState} from 'react'


function AddExpense(props)
{
   const[Date,Setdate]=useState("");
   const[Title,SetTitle]=useState("");
   const[Amount,SetAmount]=useState("");

   
  const onChangeDateHandler = (event)=>{
    Setdate(event.target.value)
  }
  
  const onChangeTitleHandler = (event)=>{
    SetTitle(event.target.value)
  }
  
  const onChangeAmountHandler = (event)=>{
    SetAmount(event.target.value)
  }
  
  const OnsubmitHandler = (event) =>{
    event.preventDefault();

    const submitdata=
    {
      title:Title,
      price:Amount, 
      date:Date
      
    }

    Setdate('');
    SetAmount('');
    SetTitle('');
    // console.log(submitdata)
    props.data(submitdata)
  }
  
  
    return(
  <>
 <form onSubmit={OnsubmitHandler}>
 <h1 className='HEADING' style={{textAlign:"center" }}>EXPENSE TRACKER </h1>    
<div className="inline-form" >
  
<label htmlFor="name">DATE:</label>
<input type="date" value={Date} onChange={onChangeDateHandler}/>

<label htmlFor="email" >EXPENSE:</label>
<input type="text"  value={Title} onChange={onChangeTitleHandler}/>

<label htmlFor="password">AMOUNT:</label>
<input type="text" value={Amount}  onChange={onChangeAmountHandler}  />

 <button type="submit"  >Submit</button> 
 </div>

 </form>
 </>
    );
   
}
export default AddExpense;
