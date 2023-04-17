

import React, {useContext} from 'react';
import {AppContext} from './context';
import Card from './card';

import {simplifyText} from '../bankClient.js';


/**
 * AllData() – returns all data from our Bad Bank Accounts.
 *
 * @api public
 *
 * @param {nil} no properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      AllData();
 *
 */
function AllData()
{
    // validate PROPS input(s)

    // initialize STATE and define accessors...

    // access CONTEXT for reference...
    const ctx = useContext(AppContext);

    // Build an HTML List of all our User Accounts
    const buildAccountList = () =>
    {
        const accountArray = [];
        var key = 0;

        for (var i in ctx)
        {
            if (i === "Users")
            {
                for (var j in ctx[i])
                {
                    if (ctx[i][j])
                    {
                        key++;

                        // pick up the Users array, skipping "users" tag (which is not an array)
                        accountArray.push(<li key={key} className="list-group-item">{simplifyText(JSON.stringify(ctx[i][j]))}</li>);
                    }
                }
            }
        }

        return accountArray;
    };


    // OUTPUT the Component's JavaScript Extension (JSX) code...
    return (
        <Card
            bgcolor="dark"
            header="Account Data"
            width="60rem"
            body={(
                <ul className="list-group">
                    {/* the rest of the list is build from the Account array held within our Context */}
                    {buildAccountList()}
                </ul>
            )}
        />
    );
}


export default AllData;

