import CostItem from "./costItem";



function Costs(props){


    return(
        <div>
            <CostItem 
             date = {props.costs.date}
             description = {props.costs.description}
             amount = {props.costs.amount}
            />
        </div>
    )
}

export default Costs;