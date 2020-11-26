import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const context = useContext(GlobalContext);

    const amounts = context.transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h4>
                Your balance
            </h4>
            <h1 id="balance">
                ${total}
            </h1>
        </div>
    )
}
