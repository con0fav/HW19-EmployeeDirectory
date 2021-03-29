import TableBody from "./TableBody";
import API from "../utils/API";
import React from "react";

class Table extends React.Component{
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
            }
        }
    }
}

export default Table;