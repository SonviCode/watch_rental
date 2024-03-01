import { Link } from 'react-router-dom';

const Slug = () => {
    return (
        <p className="text-graylight text-sm italic">
            <Link to="/">Accueil</Link> - <Link to="/watchs">Nos montres</Link> - Submariner date
        </p>
    );
};

export default Slug;