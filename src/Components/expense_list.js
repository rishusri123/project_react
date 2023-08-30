import ExpenseShow from "./expense_show";
import AddExpense from "./add_expense";
import { useState } from "react";
// let expense = [
//     {
      
//         title:'CAR LOAN',
//         date:"2021-11- 11",
//         price: 800
//     },
//     {
      
//       title:'House LOAN',
//       date:" 2021-11- 11",
//       price: 700
//   },
//   {
      
//     title:'fkmg LOAN',
//     date:" 2021-11- 11",
//     price: 600
// },
// ]
 

function Expense()
{
    
     const[expense,setexpense]=useState([
        {
            id:1,
            title:'CAR LOAN',
            date:"2021-11- 11",
            price: 800
        },
        {
          id:2,
          title:'House LOAN',
          date:" 2021-11- 11",
          price: 700
      },
      {
        id:3,  
        title:'fkmg LOAN',
        date:" 2021-11- 11",
        price: 600
    },
    ]);
    const[remove_expense,setremoveExpense]=useState([]);

  const DeleteHandler = (clicked_id)=>{
      const remove = expense.filter((del)=>del.id!=clicked_id)
      const set= setremoveExpense(remove)
       console.log(set)
  };


const add_expense = (enterdata)=>{
   setexpense([...expense,enterdata])
   }

    return( 
        <>
     
         <AddExpense data = {add_expense}/>
         
{
        expense.map(expense=>{
        return(
            <>
                <div className="space" style={{backgroundColor: "lightblue"}}>
             <ExpenseShow item={expense} remove ={DeleteHandler}/>
             </div>
             </>
        );
        // console.log(expense)
       })
    }
       </>
           );
}
export default Expense;