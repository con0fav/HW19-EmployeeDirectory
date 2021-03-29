import TableBody from "./TableBody";
import API from "../utils/API";
import React from "react";

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emp: [],
            searchedEmp: [],
            sortEmp: "asc",
            empSearc: e => {
                const filter = e.target.val;
                const searchRes = this.state.emp.filter(item => {
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
        API.getEmp().then(answer => {
            this.setState({ emp: answer.data.res, searchedEmp: answer.data.res });
        });
    }
    sortBy(key, data) {
        this.setState({
            emp: data.sort((a, b) => {
                if (key === "city") {
                    return a.city.localeCompare(b.city);
                } else {
                    return b.city.localeCompare(a.city);
                }
            })
        });
        this.setState({ sortEmp: this.state.sortEmp === "asc" ? "desc" : "asc" });
    }

    render() {
        return (
            <div className="container">
                <div className="table-responsive">
                    <table id="employees" className="table">
                        <thead>
                            <tr>
                                <th>image</th>
                                <th className="sort" onClick={() => this.sortBy("firstname", this.state.searchedEmp)}>Name</th>
                                <th className="sort" onClick={() => this.sortBy("phone", this.state.searchedEmp)}>City</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableBody searchedEmp={this.state.searchedEmp} />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }




}

export default Table;