import React, { useState } from 'react';

export const Loginform = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showTable, setShowTable] = useState(false);


    function showTableContent(event) {
        event.preventDefault();
        setShowTable(!showTable);

    }
    return (
        <div id="loginform">
            <form onSubmit={showTableContent}>
                <input
                    type="text"
                    placeholder='Enter First Name'
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value) }}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder='Enter Last Name'
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value) }}
                />
                <br />
                <br />
                <input
                    type="email"
                    placeholder='Enter E-Mail'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <br />
                <br />
                <input
                    type="password"
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <br />
                <br />
                <button type="submit">{showTable === false ? 'Show Table' : 'Hide Table'}</button>
                <br />
                <br />
            </form>
            {showTable &&
                <table border="1">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{email}</td>
                            <td>{password}</td>
                        </tr>
                    </tbody>
                </table>}


        </div>
    )
} 