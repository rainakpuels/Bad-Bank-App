

import React from 'react';
import Card from './card';


/**
 * Home() – controls a user logging into their Bad Bank Account.
 *
 * @api public
 *
 * @param {nil} no properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      Home();
 *
 */
function Home()
{

    // OUTPUT the Component's JavaScript Extension (JSX) code...
    return (
        <Card
            bgcolor="dark"
            header="Welcome to Bad Bone Bank"
            width="30rem"
            title="We'll take your money. Will you ever see it again?"
            body={(<img src="Bad-to-the-Bone.png" width="800" className="img-fluid" alt="Bad Bank Logo" />)}
        />
    );
}

export default Home;
