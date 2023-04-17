import React, {useContext, useState} from 'react';
import {AppContext} from './context';


/**
 * NavBar() – the Bad Bank Navigation Bar.
 *
 * @api public
 *
 * @param {nil} no properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      NavBar();
 *
 */
function NavBar()
{
    // validate PROPS input(s) if required

    // initialize STATE and define accessors...
    let [, setState] = useState();

    // access CONTEXT for reference...
    const ctx = useContext(AppContext);

    // #region  P R I V A T E   F U N C T I O N S

    function forceUpdate()
    {
        // passing empty object will re-render the component
        setState({});
    }

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
            <nav className="navbar navbar-expand-lg navbar-light bg-light" onClick={forceUpdate}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarId">
                    <ul className="navbar-nav navbar-nav mx-auto">
                    <li className="nav-item">
                            {!ctx.LoggedIn ? (
                                <a className="nav-link" tooltip="Return to bank home page" href="#/" aria-disabled="false">Bad Bank Home</a>
                            ) : (
                                <a className="nav-link disabled" tooltip="Home." href="#/" aria-disabled="true">Bad Bank Home</a>
                            )}
                        </li>
                        <li className="nav-item">
                            {!ctx.LoggedIn ? (
                                <a className="nav-link" tooltip="Create one or more accounts" href="#/account/" aria-disabled="false">Account(s)</a>
                            ) : (
                                <a className="nav-link disabled" tooltip="Log out to create new account(s)." href="#/account/" aria-disabled="true">Account(s)</a>
                            )}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" tooltip="Log into a existing account" href="#/login/">Login/out</a>
                        </li>
                        <li className="nav-item">
                            {!ctx.LoggedIn ? (
                                <a className="nav-link disabled" tooltip="Log in to make deposits" href="#/deposit/" aria-disabled="true">Deposit</a>
                            ) : (
                                <a className="nav-link" tooltip="Deposit funds into your account" href="#/deposit/" aria-disabled="false">Deposit</a>
                            )}
                        </li>
                        <li className="nav-item">
                            {!ctx.LoggedIn ? (
                                <a className="nav-link disabled" tooltip="Log in to make withdraws" href="#/withdraw/" aria-disabled="true">Withdraw</a>
                            ) : (
                                <a className="nav-link" tooltip="Withdraw funds from your account" href="#/withdraw/" aria-disabled="true">Withdraw</a>
                            )}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" tooltip="Check all bank accounts" href="#/alldata/">AllData</a>
                        </li>
                        <li className="nav-item">
                            {!ctx.LoggedIn ? (
                                <a className="nav-link disabled" tooltip="No User logged in" href="#/user/" aria-disabled="true">Log in required...</a>
                            ) : (
                                <a className="nav-link disabled" tooltip="Current User" href="#/user/" aria-disabled="true">Welcome {ctx.Users[ctx.UserIndex].name}!</a>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

// #endregion

// #region  C O M P O N E N T - E X P O R T S

export default NavBar;
