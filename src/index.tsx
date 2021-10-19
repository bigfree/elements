import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
