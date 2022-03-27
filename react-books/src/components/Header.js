function Header(props){
  
    return(
        <header className="d-flex justify-between align-cen align-center p-40 cu-p"> 

        <div className="headerLeft">
         
          <img width={50} height={50} src="/img/logo.svg" alt="Cart" />
          {/* <div className="align-center">
          <h3></h3>
          </div> */}
        
         <p>EngBooks </p>
         
        </div>
 
         <div>
         <ul className="headerRight">
           <li onClick={props.onClickCart} className="">
           <img width={50} height={30} src="/img/user.svg" alt="User" />
           </li>
         </ul>
         </div>
       </header>

    );
}
export default Header;

