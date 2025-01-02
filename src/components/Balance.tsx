//import React from 'react';
import { useAppSelector } from '../hooks/hooks';

function Balance() {
    const balance = useAppSelector(state => state.expense.balance )
    return (
        <div className='fw-bold'>
            Your Balance <span className='text-muted'>${balance}</span>
        </div>
    );
}

export default Balance;