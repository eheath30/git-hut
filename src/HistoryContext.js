import React, { createContext, useState } from 'react';

const historyData = [];

export const HistoryContext = createContext();

export const HistoryProvider = (props) => {
    const [history, setHistory] = useState(historyData)
    return (
        <HistoryContext.Provider value={[history, setHistory]}>
            {props.children}
        </HistoryContext.Provider>
    )
}
