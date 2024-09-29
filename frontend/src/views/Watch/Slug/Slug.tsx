import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Slug = ({ watchName }: { watchName: string }) => {
  return (
    <p className="text-graylight text-sm italic mb-5">
      <span className="text-xs">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>{" "}
      </span>
      - <Link to="/watchs">Nos montres</Link> - {watchName}
    </p>
  );
};

export default Slug;
