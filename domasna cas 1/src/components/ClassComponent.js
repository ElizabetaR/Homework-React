import React from "react";

export class ClassComponent extends React.Component {


    render() {
        return (
            <div id="class-component">
                <h2> Hi welcome to Cozy Hotel !</h2>
                <p>Hotel capacity: {this.props.capacity}</p>
                <p>Hotel occupancy: {this.props.occupancy}</p>
                {this.vacancy ? <p>{this.availability}</p> : <p>There is one room available</p>}
            </div>
        )
    }
}