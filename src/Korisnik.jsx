const Korisnik = ({ ime, prezime, dob }) => {
    return (
        <li>
            {ime} {prezime} ({dob})
        </li>
    );
};

export default Korisnik;
