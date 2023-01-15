import { Component } from "react";
import Korisnici from "./Korisnici";
import Napomena from "./Napomena";

class App extends Component {
    state = {
        korisnici: [
            {
                ime: "Branko",
                prezime: "Branković",
                dob: 32,
            },
            {
                ime: "Janko",
                prezime: "Janković",
                dob: 42,
            },
            {
                ime: "Stanko",
                prezime: "Stanković",
                dob: 52,
            },
        ],

        napomena:
            "Kako prikazati ovo kao childrens prop? Ne razumijem baš poantu traženog ni kako to postići. Ima li to ikakve veze s ovim: https://beta.reactjs.org/learn/passing-props-to-a-component#passing-jsx-as-children",
    };
    render() {
        // dekonstrukcija objekta !!!
        const { korisnici, napomena } = this.state;
        return (
            <>
                <h1>Lista korisnika</h1>
                <ul>
                    <Korisnici korisnici={korisnici}></Korisnici>
                </ul>
                <Napomena napomena={napomena} />
            </>
        );
    }
}
// https://beta.reactjs.org/learn/passing-props-to-a-component#passing-jsx-as-children

export default App;
