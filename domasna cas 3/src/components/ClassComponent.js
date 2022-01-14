import React from 'react';

export class ClassComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            headline: "Form",
            country: "",
            state: "",
            gender: "",
            table: false,


        }
    }


    showTableContent = (event) => {
        this.setState({
            table: event.preventDefault(),

        })
    }



    handleCountryChange = (event) => {
        this.setState({
            country: event.target.value
        })
    }

    handleStateChange = (event) => {
        this.setState({
            state: event.target.value
        })
    }

    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    render() {

        return (
            <div id='class-component'>
                <form onSubmit={this.showTableContent}>

                    <h1>{this.state.headline}</h1>
                    <input
                        type="text"
                        placeholder='Gender'
                        value={this.state.gender}
                        onChange={(this.handleGenderChange)}
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        placeholder='Country'
                        value={this.state.country}
                        onChange={(this.handleCountryChange)}
                    />
                    <br />
                    <br />

                    <input
                        type="text"
                        placeholder='State'
                        value={this.state.state}
                        onChange={(this.handleStateChange)}
                    />
                    <br />
                    <button type="submit">{this.table === false ? 'Show Table' : 'Hide Table'}</button>
                    <br />
                    <br />
                </form>

                {this.state.table &&
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Gender</th>
                                <th>Country </th>
                                <th>State</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.gender}</td>
                                <td>{this.country}</td>
                                <td>{this.state}</td>

                            </tr>
                        </tbody>
                    </table>}


            </div>
        )
    }
}