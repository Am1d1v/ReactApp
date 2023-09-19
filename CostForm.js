import React, { useState } from 'react'
import './CostForm.css'

const CostForm = () => {

  const [newCostName, setNewCostName] = useState('');  
  const [newAmout, setNewAmout] = useState(''); 
  const [newDate, setNewDate] = useState('');  


  const nameChangeHandler = (e) => {
    setNewCostName(e.target.value );
  }

  const amountChangeHandler = (e) => {
    setNewAmout(e.target.value);
  }

  const dateHandler = (e) => {
    setNewDate(e.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: newCostName,
      amount: newAmout,
      date: new Date(newDate)
    };
    console.log(costData);
  }

  return (
    <form onSubmit={submitHandler}>
        <div className='new-const__controls'>
            <div className='new-cost__control'>
                <label htmlFor="">Название</label>
                <input type="text" onChange={nameChangeHandler} />
            </div>

            <div className='new-cost__control'>
                <label htmlFor="">Сумма</label>
                <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>

            <div className='new-cost__control'>
                <label htmlFor="">Дата</label>
                <input type="date" min='2023-01-01' onChange={dateHandler}/>
            </div>

            <div>
                <button className='new-cost__actions' type='submit'>Добавить Расход</button>
            </div>
        </div>
    </form>
  )
}

export default CostForm

