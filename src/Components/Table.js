import TableBody from "./TableBody";

function Table({headings, emp, handleSort}) {
    return (
        <table class="table">
            <thead>
                <tr>
                    {headings.map(({name, width}) => {
                        return (
                            <th 
                            scope="col"
                            key={name}
                            style={{width}}
                            onClick={() => {
                                handleSort(name.toLowerCase());
                            }}>{name}</th>

                        )
                    })}
                </tr>
            </thead>
            <TableBody emp={emp} />
        </table>
    )
}

export default Table;