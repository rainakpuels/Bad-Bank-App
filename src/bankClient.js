
/**
 * timestamp() -- function to generate timestamp string: YYYY-MM-DD HH:MM:SS.mmm.
 * @returns  {String} "YYYY-MM-DD HH:MM:SS.mmm".
 * @api public
 */
function timeStamp()
{
    let now = new Date();
    let month = Number(now.getMonth()) + 1;  // {0003}
    return (
        now.getFullYear() +
        "-" +
        month +
        "-" +
        now.getDate() +
        " " +
        now.getHours() +
        ":" +
        now.getMinutes() +
        ":" +
        now.getSeconds() +
        "." +
        now.getMilliseconds()
    );
};

/**
 * Strips a string of BRACES, BRACKETS, QUOTES, etc.
 *
 * @param {string} textToSimplify the string to be simplified to data
 * @returns {string} the simplified text
 * @api public
 */
function simplifyText(textToSimplify)
{
    let simplifiedText = "";

    for (let i = 0; i < textToSimplify.length; i++)
    {
        switch (textToSimplify[i])
        {
            case '{':
            case '}':
            case '[':
            case ']':
            case '"':
                break;
            case ':':
                simplifiedText += textToSimplify[i];
                simplifiedText += ' ';
                break;
            case ',':
                simplifiedText += textToSimplify[i];
                simplifiedText += ' ';
                break;
            default:
                simplifiedText += textToSimplify[i];
                break;
        }
    }

    return simplifiedText;
};

/**
 * Converts an array of text items into a BOOTSTRAP CARD LIST.
 *
 * @param {array} arrayToListify the array to be convert to a HTML List.
 * @returns {string} the HTML List code.
 * @api public
 */
function listifyArrayHTML(arrayToListify)
{
    let listifiedText = "";
    var keyIndex = 0;

    arrayToListify.forEach(element =>
    {
        // convert array element to text, simplify for display, and add to LIST...
        listifiedText += `<li class="list-group-item" key="${keyIndex++}">` + simplifyText(JSON.stringify(element)) + '</li>';
    });

    return listifiedText;
};

/**
 * Converts an array of text items into a BOOTSTRAP CARD LIST - JSX code.
 *
 * @param {array} arrayToListify the array to be convert to a HTML List.
 * @returns {string} the HTML List code.
 * @api public
 */
function listifyArrayJSX(arrayToListify)
{
    let listifiedText = "";
    var keyIndex = 0;

    listifiedText += '<ul className="list-group">';

    arrayToListify.forEach(element =>
    {
        // convert array element to text, simplify for display, and add to LIST...
        listifiedText += `<li className="list-group-item" key="${keyIndex++}">` + simplifyText(JSON.stringify(element)) + '</li>';
    });

    listifiedText += '</ul>';

    return listifiedText;
};

// #region  F U N C T I O N - E X P O R T S

export {timeStamp, simplifyText, listifyArrayHTML, listifyArrayJSX};

// #endregion