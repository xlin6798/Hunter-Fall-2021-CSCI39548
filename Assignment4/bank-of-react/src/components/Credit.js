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
        cred.amount = +(+cred.amount).toFixed(2);
        cred.date = Date().toLocaleString();
        addCredit(cred);
        setCredit({
            amount: "",
            description: "",
            date: ""
        });
    }

    function onChange(e) {
        const newCredit = { ...credit };
        const inputField = e.target.placeholder;
        const inputValue = e.target.value;
        newCredit[inputField] = inputValue;
        setCredit(newCredit);
    }

    return (
        <div className="container text-center">
            <h1 className="display-1"> Credits </h1>
            <AccountBalance balance={balance}></AccountBalance>
            <Link to="/bank-of-react">Home</Link>
            <Form onSubmit={onSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Amount"
                    className="mb-3"
                >
                    <Form.Control
                        required type="number"
                        placeholder="amount"
                        onChange={onChange}
                        value={credit.amount || ""} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Description">
                    <Form.Control
                        required type="text"
                        placeholder="description"
                        onChange={onChange}
                        value={credit.description || ""} />
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Add Credit
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
                    {credits.length > 0 ? credits.map((cred, indx) => (
                        <tr key={indx}>
                            <th> {indx + 1} </th>
                            <th> {cred.date} </th>
                            <th> {cred.amount} </th>
                            <th> {cred.description} </th>
                        </tr>
                    )) :
                    <p>none</p>}
                </tbody>
            </Table>
        </div>
    )
}

export default Credit;
