import { Link, useLocation, useNavigate } from "react-router-dom";
function BackToCardsLink() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Link
      to="/cards"
      className="button-link"
      onClick={(event) => {
        if (location.state?.fromCatalog) {
          event.preventDefault();
          navigate(-1);
        }
      }}
    >
      ← Назад до карт
    </Link>
  );
}

export default BackToCardsLink;
