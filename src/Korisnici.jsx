import Korisnik from "./Korisnik";
import Napomena from "./Napomena";

const Korisnici = ({ korisnici }) => {
    return (
        <div>
            {korisnici.map((korisnik) => {
                return (
                    <Korisnik
                        ime={korisnik.ime}
                        prezime={korisnik.prezime}
                        dob={korisnik.dob}
                    />
                );
            })}
        </div>
    );
};

export default Korisnici;
