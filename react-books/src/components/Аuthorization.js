function Аuthorization(props){
    return(
        
        <div  className="user">
           <div className="text-center"> 
          <div className="Block">
            <h3 className="mb-30">
              {/* доделать */}
              Авторизация <img onClick={props.onClose} className="cu-p d-flex   ml-auto  " src="/img/btn-remove.svg"alt="Close"/>
               </h3>
    
          </div>
          </div> 
      </div>
      

    );

}
export default Аuthorization;