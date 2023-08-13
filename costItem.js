import './costItem.css'


function CostItem(){

    const costDate = new Date(2023, 1, 7);
    const costDescription = 'Some Item';
    const costAmount = 100;

    return(    
    <div>

        <div className='cost-item'>

        <div>{costDate.toISOString()}</div>
        <div className='cost-item__description'>
            <h2>{costDescription}</h2>
            <div className='cost-item__price'>{costAmount}</div>
        </div>
        

        </div>
        
        

    </div>
    );
}

export default CostItem;



