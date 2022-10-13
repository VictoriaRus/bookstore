import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import store from "./redux/store/store";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Helios', sans-serif;
    color: #313037;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Global/>
            <App/>
        </Provider>
    </BrowserRouter>
);