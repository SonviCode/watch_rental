import { Link } from 'react-router-dom';

const Slug = () => {
    return (
        <p className="text-graylight text-sm py-5 italic">
            <Link to="/">Accueil</Link> - <Link to="/watchs">Nos montres</Link> - Submariner date
        </p>
    );
};

export default Slug;