import TableBody from "./TableBody";
import API from "../utils/API";
import React from "react";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emps: [],
            searchedEmp: [],
            sortEmp: "asc",
            empSearch: e => {
                const filter = e.target.val;
                const searchRes = this.state.emps.filter(item => {
                    let values = Object.values(item)
                        .join("")
                        .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });
                this.setState({ searchedEmp: searchRes });
            }
        };
        this.sortBy = this.sortBy.bind(this);
    }
    componentDidMount() {
        API.getEmps().then(answer => {
            this.setState({ emps: answer.data.results, searchedEmp: answer.data.results });
        });
    }
    sortBy(key, data) {
        this.setState({
            emps: data.sort((a, b) => {
                if (key === "city") {
                    return a.city.localeCompare(b.city);
                } else {
                    return b.city.localeCompare(a.city);
                }
            })
        });
        this.setState({ sortEmps: this.state.sortEmps === "asc" ? "desc" : "asc" });
    }

    
    render() {
        const emp = this.state.searchedEmp;
        console.log(this.state.searchedEmp);
        return (
            <div className="container">
                <div className="table-responsive">
                    <table id="emps" className="table">
                        <thead>
                            <tr>
                                <th>image</th>
                                <th className="sort" onClick={() => this.sortBy("firstname", this.state.searchedEmp)}>Name</th>
                                <th className="sort" onClick={() => this.sortBy("phone", this.state.searchedEmp)}>City</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableBody emps={emp} />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default Table;