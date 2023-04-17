import React from 'react';
import {AppContext} from './context';
import Card from './card';

const TIMEOUT_MSEC = 3000;
const MINIMUM_WITHDRAW = 5;

/**
 * Withdraw() – the Bad Bank Withdraw Component.
 *
 * @api public
 *
 * @param {nil} no properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      Withdraw();
 *
 */
function Withdraw()
{
    // validate PROPS input(s) if required

    // initialize STATE and define accessors...
    const [cleared, setCleared] = React.useState(false);
    const [needInput, setNeedInput] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [submitDisabled, setSubmitDisabled] = React.useState('');

    const [withdraw, setWithdraw] = React.useState(0);

    // access CONTEXT for reference...
    const ctx = React.useContext(AppContext);

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

        if (label === "withdraw")
        {
            if (isNaN(field))
            {
                setStatus('Error NaN: Withdraw must be a number.');
                setTimeout(() => setStatus(''), TIMEOUT_MSEC);
                setSubmitDisabled('Disabled');
                return false;
            }

            if (field < 0)
            {
                setStatus('Error: Withdraw cannot be negative.');
                setTimeout(() => setStatus(''), TIMEOUT_MSEC);
                setSubmitDisabled('Disabled');
                return false;
            }

            if (field < MINIMUM_WITHDRAW)
            {
                setStatus('Error: Withdraw is less than minimum.');
                setTimeout(() => setStatus(''), TIMEOUT_MSEC);
                setSubmitDisabled('Disabled');
                return false;
            }

            if (field > ctx.Users[ctx.UserIndex].balance)
            {
                setStatus('OVERDRAFT: Withdraw is more than your balance.');
            }
        }

        return true;
    }

    function checkFields()
    {
        setSubmitDisabled('Disabled');

        if (!validate(withdraw, 'withdraw')) return false;
        if (parseInt(withdraw) < MINIMUM_WITHDRAW) return false;

        setSubmitDisabled('');

        return true;
    }

    function clearForm()
    {
        setWithdraw('');

        setSubmitDisabled('Disabled');
    };

    // #endregion

    // #region  E V E N T   H A N D L E R S
    /*
     * *_Click() - 'on click' event handlers for UI elements.
     */

    // clears the UI fields for Withdraw creation unconditionally
    function clearForm_Click()
    {
        clearForm();
        setNeedInput(true);
    }

    // makes a User Withdraw if passed validate input fields
    function makeWithdraw_Click()
    {
        console.log("Making Withdraw:", withdraw);

        if (!checkFields())
        {
            return;
        }

        // add withdraw to Account balance
        ctx.Users[ctx.UserIndex].balance = parseInt(ctx.Users[ctx.UserIndex].balance) - parseInt(withdraw);

        if (ctx.Users[ctx.UserIndex].balance < 0)
        {
            window.alert("You have OVERDRAWN your Account, you were charged an additional $35 fee.");
            ctx.Users[ctx.UserIndex].balance = parseInt(ctx.Users[ctx.UserIndex].balance) - 35;
        }

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
            header="Withdraw"
            width="30rem"
            status={status}
            body={needInput ? (
                <form>
                    Current Balance<br />
                    <input type="text" readOnly={true} className="form-control" id="balance"
                        placeholder="Current balance" value={ctx.Users[ctx.UserIndex].balance} /><br />

                    Withdraw<br />
                    <input type="input" autoComplete="new-password" required={true} className="form-control" id="withdraw"
                        placeholder="New withdraw ($10 min.)" value={withdraw} onChange={e =>
                        {
                            setSubmitDisabled('');
                            setWithdraw(e.currentTarget.value);
                            validate(e.currentTarget.value, 'withdraw');
                        }} /><br />

                    <button type="button" className="btn btn-light" onClick={clearForm_Click}>Clear</button>
                    <> </>
                    <button type="submit" className="btn btn-light" onClick={makeWithdraw_Click} disabled={submitDisabled}>Withdraw</button>
                    <br />
                </form>
            ) : (
                <>
                    <h5>Success</h5>
                    <br />
                    Current Balance<br />
                    <input type="text" readOnly={true} className="form-control" id="balance"
                        placeholder="Current balance" value={ctx.Users[ctx.UserIndex].balance} /><br />
                    <button type="submit" className="btn btn-light" onClick={clearForm_Click}>Make another withdraw</button>
                </>
            )}
        />
    );
}

export default Withdraw;