import { useState } from "react";

function Credit({ credits, addCredit }) {
    const[credit, setCredit] = useState({
        amount: 100,
        description: "",
    })
    
    function onSubmit(e) {
        e.preventDefault();

        addCredit(credit);
    }

    function onChange(e) {
        const newCredit = {credit};
        const inputField = e.target.name;
        const inputValue = e.target.value;
        newCredit[inputField] = inputValue;
        setCredit(newCredit);
    }

    return (
        <>
            <h1> Credit </h1>
            <form onSubmit={onSubmit}>
                <label for="fname"> Credit Amount </label>
                <input type="text" id="amount" name="amount" onChange={onChange} value={credit.amount} />
                <label for="lname   "> Description </label>
                <input type="text" id="description" name="description" onChange={onChange} value={credit.description} />
                <input type="submit" value="Submit" />
            </form>
            <table>
                <tr>
                    <th> Date </th>
                    <th> Amount </th>
                    <th> Description </th>
                </tr>
                {credits.map((cred, indx) => (
                    <tr>
                        <th> {cred.date} </th>
                        <th> {cred.amount} </th>
                        <th> {cred.description} </th>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default Credit;
