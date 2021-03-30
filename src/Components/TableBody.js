
function TableBody(props) {

    console.log(props);

    return props.emps.length > 0 && props.emps.map(emp => (
        <tr key={emp.login.uuid}>
            <td><img src={emp.picture.thumbnail} alt="Employee" /></td>
            <td>{emp.name.first + ' ' + emp.name.last}</td>
            <td>{emp.location.city}</td>
            <td>{emp.email}</td>
        </tr>
    ))
}

//maybe {location.city}

export default TableBody;