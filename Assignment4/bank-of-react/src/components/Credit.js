import { useState } from "react";
import Table from 'react-bootstrap/Table';
import AccountBalance from "./AccountBalance";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Credit({ credits, addCredit, balance }) {
    const [credit, setCredit] = useState({
        amount: "",
        description: "",
        date: ""
    })

    function onSubmit(e) {
        e.preventDefault();
        const cred = credit;
        cred.date = Date().toLocaleString();
        cred.amount = (+cred.amount).toFixed(2);
        addCredit(cred);
        setCredit("");
    }

    function onChange(e) {
        const newCredit = {...credit};
        const inputField = e.target.placeholder;
        const inputValue = e.target.value;
        newCredit[inputField] = inputValue;
        setCredit(newCredit);
    }

    return (
        <>
            <h1> Credit </h1> <h3> <AccountBalance balance={balance}></AccountBalance> </h3>
            <Link to="/bank-of-react">Home</Link>
            <Form onSubmit={onSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Amount"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="amount" onChange={onChange} value={credit.amount || ""} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Description">
                    <Form.Control type="text" placeholder="description" onChange={onChange} value={credit.description || ""} />
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Date </th>
                        <th> Amount </th>
                        <th> Description </th>
                    </tr>
                </thead>
                <tbody>
                    {credits.map((cred, indx) => (
                        <tr key={indx}>
                            <th> {indx + 1} </th>
                            <th> {cred.date} </th>
                            <th> {cred.amount} </th>
                            <th> {cred.description} </th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Credit;
