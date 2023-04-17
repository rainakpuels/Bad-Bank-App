import React, {useContext} from 'react';

import {HashRouter, Routes, Route} from 'react-router-dom';

import {AppContext} from './Components/context';

import NavBar from './Components/navbar';
import Account from './Components/account';
import AllData from './Components/alldata';
import Deposit from './Components/deposit';
import Home from './Components/home';
import Login from './Components/login';
import Withdraw from './Components/withdraw';

import './App.css';

/**
 * App() – Bad Bank's Single Page App (SPA).
 *
 * @api public
 *
 * @param {nil} no properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      App();
 *
 */
function App()
{
    // validate PROPS input(s)

    // initialize STATE and define accessors...

    // access CONTEXT for reference...
    const ctx = useContext(AppContext);

    // #region  P R I V A T E   F U N C T I O N S

    // #endregion

    // #region  E V E N T   H A N D L E R S
    /*
     * *_Click() - 'on click' event handlers for UI elements.
     */

    // #endregion

    // perform component COMPUTATION to generate output

    // OUTPUT the Component's JavaScript Extension (JSX) code...
    return (
        <>
            <HashRouter>

                <NavBar />

                <div className="container" style={{padding: "20px"}}>
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/account/" element={<Account />}></Route>
                        <Route path="/login/" element={<Login />}></Route>
                        <Route path="/deposit/" element={<Deposit />}></Route>
                        <Route path="/withdraw/" element={<Withdraw />}></Route>
                        <Route path="/alldata/" element={<AllData />}></Route>
                    </Routes>
                </div>

                <p>{ctx.Version}</p>

            </HashRouter>
        </>
    );
}

export default App;
