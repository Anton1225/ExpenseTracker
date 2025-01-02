import  { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { addExpenseToHistory, calculateBalance, calculateExpense, calculateIncome, IExpense } from './redux/features/expenseSlice';
import { Form } from 'react-bootstrap';

function TransactionForm() {
    const dispatch = useAppDispatch();
    const [expense, setExpense] = useState<IExpense>({expenseName: "", amount: ""});
    const onChange = <K extends keyof IExpense>(key: K, value: IExpense[K]) => {
    setExpense({...expense, [key]: value})
    }

    return <div className='mt-3'>
        <h3 className='border-bottom border-2 border-dark d-inline' style={{maxWidth: "100%"}}>Add Transaction</h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Text</Form.Label>
        <Form.Control name="expenseName" onChange={(e)=> onChange(e.target.name as keyof IExpense, e.target.value)} type="text" placeholder="Enter text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Amount</Form.Label>
        <Form.Control name="amount" onChange={(e)=> onChange(e.target.name as keyof IExpense, e.target.value)} type="text" placeholder="Enter amount" />
      </Form.Group>
      <button onClick={() => {
        console.log('clicked')
        if (typeof expense.amount === "string" && !isNaN(parseFloat(expense.amount))) {
          dispatch(addExpenseToHistory(expense));
          dispatch(calculateBalance());
          dispatch(calculateIncome());
          dispatch(calculateExpense())
        }
        console.log(expense)
      }
    } 
      className='btn btn-primary'>Add Transaction</button>
         </div>
}


export default TransactionForm;