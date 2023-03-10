
import './App.css';

function App() {
  return (
    <div className="App">
       <Board />
    </div>
  );
}

export default App;

function Board() {
  return(
     <div className='outer'>
      <div className='card_holder'>
      <Card
       subscription = 'FREE'
       price = '$0'
       validity = 'month'
       line1 = '✔️ Single User'
       line2 = '✔️ 5GB Storage'
       line3 = '✔️ Unlimited Public Projects'
       line4 = '✔️ Community Access'
       line5 = '❌ Unlimited Private Projects'
       line6 = '❌ Dedicated Phone Support'
       line7 = '❌ Free Subdomain'
       line8 = '❌ Monthly Status Reports'
      />

       <Card
       subscription = 'PLUS'
       price = '$9'
       validity = 'month'
       line1 = '✔️ 5 Users'
       line2 = '✔️ 50GB Storage'
       line3 = '✔️ Unlimited Public Projects'
       line4 = '✔️ Community Access'
       line5 = '✔️ Unlimited Private Projects'
       line6 = '✔️ Dedicated Phone Support'
       line7 = '✔️ Free Subdomain'
       line8 = '❌ Monthly Status Reports'
      />

       <Card
       subscription = 'PRO'
       price = '$49'
       validity = 'month'
       line1 = '✔️ Unlimited Users '
       line2 = '✔️ 50GB Storage'
       line3 = '✔️ Unlimited Public Projects'
       line4 = '✔️ Community Access'
       line5 = '✔️ Unlimited Private Projects'
       line6 = '✔️ Dedicated Phone Support'
       line7 = '✔️ Unlimited Free Subdomain'
       line8 = '✔️ Monthly Status Reports'
      />

      </div>
     
     </div>
  );
}




function Card(props){
  return(
    <div className='card'>
       <div className='header'>
       <p className='subscription'>{props.subscription} </p>
       <p><span className='price'>{props.price} </span>/{props.validity} </p>
       </div>


       <div className='content'>
        <hr></hr>
       <p className='features'>{props.line1}</p>  
       <p className='features'>{props.line2}</p>
       <p className='features'>{props.line3}</p>
       <p className='features'>{props.line4}</p>
       <p className='features'>{props.line5}</p>
       <p className='features'>{props.line6}</p>
       <p className='features'>{props.line7}</p>
       <p className='features'>{props.line8}</p>
       </div>


       <div className='footer'>
        <a className='buttons' type='button' href='#'>BUTTON</a>
       </div>



    </div>
  );
}