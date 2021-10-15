import React, { FC } from 'react';
import './App.css';

const Test: FC<{ message: string }> = ({ children, message }): JSX.Element => {
    return <p><small>{children}</small> {message}</p>
}

const App: FC = (): JSX.Element => {
    return <>
        <h1>Ahoy Adam!</h1>
        <Test message="message">
            <p>children</p>
        </Test>
    </>;
}

export default App;
