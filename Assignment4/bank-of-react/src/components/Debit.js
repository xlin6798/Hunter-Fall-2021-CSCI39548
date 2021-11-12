function Debit({ debits }) {
    return (
        <>
            <h1> Debit </h1>
            <form action="/action_page.php">
                <label for="fname"> Debit Amount </label>
                <input type="text" id="amount" name="amount" value="" />
                <label for="lname"> Description </label>
                <input type="text" id="description" name="description" value="" />
                <input type="submit" value="Submit" />
            </form>
            <table>
                <tr>
                    <th> Date </th>
                    <th> Amount </th>
                    <th> Description </th>
                </tr>
                {debits.map((deb, indx) => (
                    <tr>
                        <th> {deb.date} </th>
                        <th> {deb.amount} </th>
                        <th> {deb.description} </th>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default Debit
