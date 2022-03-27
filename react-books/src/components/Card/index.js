import React from 'react';
import styles from './Card.module.scss';


function Card (props){
  return (
    <div className={styles.card }>
         {/* <div className="align-center justify-between "> */}
         <img width={133} height={200} src={props.imageUrl} alt="Books"/>
         {/* Дж. Роуллинг. */}
          <h5>{props.title}</h5>
          <div className="align-center justify-between">
          {/* кнопка с ссылкой  onClick={()=> {props.onClick}} */}
        <button className="button"  >
        {/* {props.pdflUrl} */}
       <a href={props.pdflUrl}>Читать</a>
        </button>
      </div>
          {/* </div> */}
         </div>

  );
}

export default Card;
