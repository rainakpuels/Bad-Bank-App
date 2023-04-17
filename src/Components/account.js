import React, {useContext, useState} from 'react';
import {AppContext} from './context';
import Card from './card';

const TIMEOUT_MSEC = 3000;
const MINIMUM_PASSWORD_LENGTH = 8;
const MINIMUM_OPENING_DEPOSIT = 100;
/**
 * Account() – the Bad Bank Account Component.
 *
 * @api public
 *
 * @param {nil} no properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      Account();
 *
 */
function Account()
{
    // validate PROPS input(s) if required

    // initialize STATE and define accessors...
    const [cleared, setCleared] = useState(false);
    const [needInput, setNeedInput] = useState(true);
    const [status, setStatus] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [balance, setBalance] = useState(0);

    // access CONTEXT for reference...
    const ctx = useContext(AppContext);

    // #region  P R I V A T E   F U N C T I O N S

    // field validation...
    function validate(field, label)
    {
        if (!field)
        {
            setStatus(`Error: ${label} is required`);
            setTimeout(() => setStatus(''), TIMEOUT_MSEC);
            setSubmitDisabled('Disabled');
            return false;
        }

        if (label === "email")
        {
            // make sure this email is not already in use
            var emailInUse = false;
            for (let i = 0; i < ctx.Users.length; i++)
            {
                if (ctx.Users[i].email === field)
                {
                    emailInUse = true;
                    break;
                }
            }
            if (emailInUse)
            {
                setStatus(`Error: The supplied email is already in use.`);
                setTimeout(() => setStatus(''), TIMEOUT_MSEC);
                setSubmitDisabled('Disabled');
                return false;
            }
        }

        if (label === "password")
        {
            if (field.length < MINIMUM_PASSWORD_LENGTH)
            {
                setStatus(`Error: Password must be at least ${MINIMUM_PASSWORD_LENGTH} characters.`);
                setTimeout(() => setStatus(''), TIMEOUT_MSEC);
                setSubmitDisabled('Disabled');
                return false;
            }
        }

        if (label === "balance")
        {
            if (field < MINIMUM_OPENING_DEPOSIT)
            {
                setStatus('Error: Opening deposit is less than minimum.');
                setTimeout(() => setStatus(''), TIMEOUT_MSEC);
                setSubmitDisabled('Disabled');
                return false;
            }
        }

        return true;
    }

    // validates all form fields
    function checkFields()
    {
        setSubmitDisabled('Disabled');

        if (!validate(name, 'name')) return false;
        if (!validate(email, 'email')) return false;
        if (!validate(password, 'password')) return false;
        if (!validate(balance, 'balance')) return false;
        if (parseInt(balance) < MINIMUM_OPENING_DEPOSIT) return false;

        setSubmitDisabled('');

        return true;
    }

    // clear fields and prepares for new data
    function clearForm()
    {
        setName('');
        setEmail('');
        setPassword('');
        setBalance('');

        setSubmitDisabled('Disabled');
    };

    // #endregion

    // #region  E V E N T   H A N D L E R S
    /*
     * *_Click() - 'on click' event handlers for UI elements.
     */

    // clears the UI fields for Account creation unconditionally
    function clearForm_Click()
    {
        clearForm();
        setNeedInput(true);
    }

    // creates a User Account if passed validate input fields
    function createAccount_Click()
    {
        console.log("Create Account:", name, email, password);

        if (!checkFields())
        {
            return;
        }

        ctx.Users.push({name, email, password, balance});

        setNeedInput(false);
    }

    // #endregion

    // perform component COMPUTATION to generate output
    if (!cleared)
    {
        clearForm();
        setCleared(true);
    }

    // OUTPUT the Component's JavaScript Extension (JSX) code...
    return (
        <Card
            bgcolor="dark"
            header="Account"
            width="30rem"
            status={status}
            body={needInput ? (
                <form>
                    Name<br />
                    <input type="input" autoComplete="new-password" required={true} className="form-control" id="name"
                        placeholder="Enter name" value={name} onChange={e =>
                        {
                            setSubmitDisabled('');
                            setName(e.currentTarget.value);
                            validate(e.currentTarget.value, 'name');
                        }} /><br />

                    Email Address<br />
                    <input type="email" autoComplete="new-password" required={true} className="form-control" id="email"
                        placeholder="Enter email" value={email} onChange={e =>
                        {
                            setSubmitDisabled('');
                            setEmail(e.currentTarget.value);
                            validate(e.currentTarget.value, 'email');
                        }} /><br />

                    Password<br />
                    <input type="password" autoComplete="new-password" required={true} className="form-control" id="password"
                        placeholder="Enter password" value={password} onChange={e =>
                        {
                            setSubmitDisabled('');
                            setPassword(e.currentTarget.value);
                            validate(e.currentTarget.value, 'password');
                        }} /><br />

                    Initial Deposit<br />
                    <input type="input" autoComplete="new-password" required={true} className="form-control" id="balance"
                        placeholder="Initial balance ($100 min.)" value={balance} onChange={e =>
                        {
                            setSubmitDisabled('');
                            setBalance(e.currentTarget.value);
                            validate(e.currentTarget.value, 'balance');
                        }} /><br />

                    <button type="button" className="btn btn-light" onClick={clearForm_Click}>Clear</button>
                    <> </>
                    <button type="submit" className="btn btn-light" onClick={createAccount_Click} disabled={submitDisabled}>Create</button>
                    <br />
                </form>
            ) : (
                <>
                    <h5>Success</h5>
                    <br />
                    <button type="submit" className="btn btn-light" onClick={clearForm_Click}>Add another account</button>
                </>
            )}
        />
    );
}


export default Account;

