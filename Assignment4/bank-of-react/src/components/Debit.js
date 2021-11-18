import { useState } from "react";
import Table from 'react-bootstrap/Table';
import AccountBalance from "./AccountBalance";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Debit({ debits, addDebit, balance }) {
    const [debit, setDebit] = useState({
        amount: "",
        description: "",
        date: ""
    })

    function onSubmit(e) {
        e.preventDefault();
        const deb = debit;
        deb.amount = +(+deb.amount).toFixed(2);
        deb.date = Date().toLocaleString();
        addDebit(deb);
        setDebit({
            amount: "",
            description: "",
            date: ""
        });
    }

    function onChange(e) {
        const newDebit = { ...debit };
        const inputField = e.target.placeholder;
        const inputValue = e.target.value;
        newDebit[inputField] = inputValue;
        setDebit(newDebit);
    }

    return (
        <div className="container text-center">
            <h1 className="display-1"> Debits </h1>
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
                        value={debit.amount || ""} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Description">
                    <Form.Control
                        required type="text"
                        placeholder="description"
                        onChange={onChange}
                        value={debit.description || ""} />
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Add Debit
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
                    {debits.length > 0 ? debits.map((deb, indx) => (
                        <tr key={indx}>
                            <th> {indx + 1} </th>
                            <th> {deb.date} </th>
                            <th> {deb.amount} </th>
                            <th> {deb.description} </th>
                        </tr>
                    )) :
                    <p>none</p>}
                </tbody>
            </Table>
        </div>
    )
}

export default Debit;
