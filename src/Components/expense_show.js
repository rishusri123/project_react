
import './expense_show.css'
function ExpenseShow(props)
{

  const Delete = ()=>{
    const Getid=props.item.id
      props.remove(Getid)
      }   

  
    return(
        <>
      <div className="inline-form">

      <label htmlFor="name">id:</label>
        <div>
          {props.item.id}
        </div>

        <label htmlFor="name">DATE:</label>
        <div>
          {props.item.date}
        </div>

     
        <label htmlFor="email" >EXPENSE:</label>
        <div>
          {props.item.title}
        </div>
        
        <label htmlFor="password">AMOUNT:</label>
        <div>
          {props.item.price}
        </div>
       
        <button type="submit" onClick={Delete}>DELETE</button> 
     
       </div>
     </>
    );
}
export default ExpenseShow;