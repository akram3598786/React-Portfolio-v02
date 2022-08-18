

export default function showingCount(num){
    return (
    <>
     <h3>Count is :  {num%2==0 ? <span className="green" >{num}</span>  : <span className="red" >{num}</span>}</h3>
    </>
    );
  }