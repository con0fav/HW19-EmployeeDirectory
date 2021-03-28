return (
    <tbody>
        {emp[0] !== undefined && emp[0].name !== undefined ? (
            emp.map(({login, picture, name, city, email }) => {
                return (
                    <tr key={login.uuid}>
                        <td data-th="Image" className="align-middle">
                            <img 
                            src={picture.medium}
                            alt={"image for" + name.first}
                            className="img-responsive"
                            />
                        </td>
                        <td data-th="name" className="name-cell align-middle">
                            {name.first} {name.last}
                        </td>
                    </tr>
                )
            })
        )}
    </tbody>
)