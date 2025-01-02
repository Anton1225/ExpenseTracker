import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ExpenseState { 
    balance: number
    expense: number
    income: number
    expenseHistory: {
        expenseName: string
        amount: number
    }[]
}

export interface IExpense {
    expenseName: string
    amount: number  | string
}

const initialState: ExpenseState = {
    balance: 0,
    expense: 0,
    income: 0,
    expenseHistory: []
}

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpenseToHistory: (state, { payload: { expenseName, amount } }: PayloadAction<IExpense>) => {
            const parsedAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

            state.expenseHistory.push({ expenseName, amount: parsedAmount });
        },
        calculateBalance: (state) => {
            state.balance = state.expenseHistory.reduce((total, expense) => total + expense.amount, 0);
        },
        calculateIncome: (state) => {
            state.income = state.expenseHistory.reduce((total, expense) => expense.amount > 0 ? total + Math.abs(expense.amount) : total, 0);
        },
        calculateExpense: (state) => {
            state.expense = state.expenseHistory.reduce((total, expense) => expense.amount < 0 ? total + Math.abs(expense.amount) : total, 0);
        }
    }
})

export const {
    addExpenseToHistory,
    calculateBalance,
    calculateIncome,
    calculateExpense    
} = expenseSlice.actions

export default expenseSlice.reducer