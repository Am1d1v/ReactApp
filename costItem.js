import './costItem.css'
import CostDate from './costDate'; 
import { useState } from 'react';


function CostItem(props){

    const [description, setDescription] = useState(props.description)

    const changeDescriptionHandler = () => {
        setDescription('New Description')
    }

    return(    
    <div>
        <div className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>{props.amount}$</div>
                <button onClick={changeDescriptionHandler}>Change Description</button>
            </div>   
        </div>
    </div>
    );
}

export default CostItem;



