
import React from 'react';


/**
 * Card() – a common App 'Card' definitions for all derived Components.
 *
 * @api public
 *
 * @param {type} props component properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      Card(props);
 *
 */
function Card(props)
{
    
    /*
     * bootstrapCard() - builds a Bootstrap Card Class name from passed properties.
     */
    function bootstrapCard()
    {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
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
        <div className={bootstrapCard()} style={{maxWidth: props.width}}>

            <div className="card-header">{props.header}</div>

            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>

        </div>
    );
}

// #endregion

// #region  C O M P O N E N T - E X P O R T S

export default Card;

// #endregion

// #endregion
// #endregion