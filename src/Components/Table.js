import TableBody from "./TableBody";

function Table({ headings, emp, handleSort }) {
    return (
        <table class="table" id="emp">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <TableBody />
            </tbody>
        </table>
    )
}

export default Table;