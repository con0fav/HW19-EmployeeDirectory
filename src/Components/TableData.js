import React, { Component } from "react";
import Table from "./Table";
import API from "../utils/API";

export default class TableData extends Component {
    state = {
        emp: [{}],
        order: "descend",
        filteredEmp: [{}]
    }

    headings = [
        { name: "Image", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "City", width: "20%" },
        { name: "Email", width: "20%" },
    ]


    //space for additional features


    componentDidMount() {
        API.getEmp().then(res => {
            this.setState({
                emp: res.data.res,
                filteredEmp: res.data.res
            })
        })
    }


    render() {
        return (
            <>
                <div className = "data-area">
                    <Table
                    headings={this.headings}
                    emp={this.state.filteredEmp} 
                    />
                </div>
            </>
        )
    }

}