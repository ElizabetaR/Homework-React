import React from "react";
import { Hotel } from "./Hotel";
import { ClassComponent } from "./ClassComponent";


export function App() {
    return (
        <div id="app">
            <Hotel capacity={170} occupancy={164} vacancy={true} availability={"We have 6 rooms available"} />
            <ClassComponent capacity={160} occupancy={159} vacancy={true} availability={"There is one room available"} />
        </div>
    )
}
