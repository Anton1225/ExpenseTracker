//import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Balance from './components/Balance'
import IncomeAndExpanse from './components/IncomeAndExpense'
import ExpanseHistory from './components/ExpenseHistory'
import TransactionForm from './components/TransactionForm'


function App(): JSX.Element {

  return (
    <Container>
      <Balance />
      <IncomeAndExpanse/>
      <ExpanseHistory/>
      <TransactionForm/>
    </Container>
  )
}
export default App