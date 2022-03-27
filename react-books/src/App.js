
// import { json } from 'express';
import React from 'react';
import Card from './components/Card';

import Header from './components/Header';
import Аuthorization from './components/Аuthorization';





function App() {
  
  const [items,setItems] = React.useState([]);
  // const [cartItems,setCartItems]=React.useState([]);
  const[searchValue, setSearchValue]=React.useState('');
  const[cartOpened, setCartOpened]=React.useState(false);
  
  React.useEffect(()=>{
  fetch('https://6228c00b9fd6174ca82e3d23.mockapi.io/items')
    .then((res)=>{
      return res.json();
    })
    .then((json)=>{
      setItems(json);
    });
},[]);

// для поиска 
const onChangeSearchInput = (event)=>{
  // console.log (event.target.valut);
setSearchValue(event.target.value);
};

  return (
    
     <div className="wrapper clear ">
    {cartOpened && <Аuthorization onClose={()=>setCartOpened(false)}/>}
    <Header onClickCart={()=> setCartOpened(true)}/>

    {/* {btnOpened && <Card btnClose={()=>setCartOpened(false)}/>} 
     <Header onClickbtn={()=> setCartOpened(true)}/>   */}

      <div className="content p-40">
     <div className="d-flex align-center justify-between mb-40">
        <h1 >{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все книги'}</h1>
        <div className="search-block d-flex">
        <img src="/img/search.svg" alt="Search"/>
        <input onChange={onChangeSearchInput} placeholder="Поиск..."/>
        </div>
       </div>
     
   <div className='d-flex flex-wrap'>
     
     {items.filter(item=> item.title.toLowerCase().includes(searchValue)).map ((item,index) =>(
      //  кнопка
       <Card 
       key={index}
       title={item.title} 
       imageUrl={item.imageUrl} 
    //  onClick= {obj.pdfUrl}
        />
     ) )}
     </div>

  </div>     
  </div>
 

  );
  
}

export default App;
