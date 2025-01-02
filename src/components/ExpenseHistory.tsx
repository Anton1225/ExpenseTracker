//import React from 'react';
import { useAppSelector } from '../hooks/hooks';

function ExpanseHistory() {
    const expenses = useAppSelector(state => state.expense.expenseHistory)
    return (
        <div style={{width: "100%"}}>
           {expenses.map((expense, index) => (
    <div key={expense.expenseName + index} style={{ alignItems: "center", width: 'auto' }} className={expense.amount< 0 ? "bg-danger shadow-sm p-1 my-2 d-flex rounded text-white" : "bg-success shadow-sm p-1 my-2 d-flex rounded text-white"} >
        <div>{expense.expenseName.toLocaleUpperCase()} :</div>
        <div className="p-1">{expense.amount}</div>
    </div>
))}           
  {!expenses.length&& <div className='p1 my-3 text-center'>No Transactions Yet</div>}
        </div>
    );
}

export default ExpanseHistory;