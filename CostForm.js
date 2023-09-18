import React from 'react'
import './CostForm.css'

const CostForm = () => {
  return (
    <form action="">
        <div className='new-const__controls'>
            <div className='new-cost__control'>
                <label htmlFor="">Название</label>
                <input type="text" />
            </div>

            <div className='new-cost__control'>
                <label htmlFor="">Сумма</label>
                <input type="number" min='0.01' step='0.01'/>
            </div>

            <div className='new-cost__control'>
                <label htmlFor="">Дата</label>
                <input type="date" min='2023-01-01'/>
            </div>

            <div>
                <button className='new-cost__actions' type='submit'>Добавить Расход</button>
            </div>
        </div>
    </form>
  )
}

export default CostForm

