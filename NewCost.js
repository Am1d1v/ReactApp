import './NewCost.css'
import CostForm from './CostForm';

function NewCost(props){

    const SaveCostData = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        console.log(costData);

        props.onAddCost(costData);
    }

    return(
        <div className='new-cost'>
            <CostForm onSaveCostData={SaveCostData} />
        </div>
    )
}

export default NewCost;