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

interface AddExpensePayload {
    expenseName: string
    amount: number | string
}

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpenseToHistory: (state, action: PayloadAction<AddExpensePayload>) => {
            const { expenseName, amount } = action.payload;
            // Convert amount to number if it is a string
            const parsedAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

            // Update the state
            state.expensee += parsedAmount;
            state.balance -= parsedAmount;

            // Add the expense to the history
            state.expenseHistory.push({ expenseName, amount: parsedAmount });
        },
        calculateBalance: (state, action: PayloadAction<AddExpensePayload>) => {
            state.balance = state.expenseHistory.reduce((total, expense) => total + expense.amount, 0);
        },

        calculateIncome: (state, action: PayloadAction<AddExpensePayload>) => {
            state.income = state.expenseHistory.reduce((total, expense) => {if(expense.amount > 0) {return Math.abs( total + expense.amount)}; return total}, 0);      
    }, 
    calculateExpense: (state, action: PayloadAction<AddExpensePayload>) => {
        state.expense = state.expenseHistory.reduce((total, expense) => {if(expense.amount < 0) {return Math.abs( total + expense.amount)}; return total}, 0);
    }
})