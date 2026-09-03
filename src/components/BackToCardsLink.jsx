import { Link, useLocation, useNavigate } from "react-router-dom";

function BackToCardsLink() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event) => {
    if (location.state?.fromCatalog) {
      event.preventDefault();

      navigate("/cards", {
        state: {
          restoreScrollY: location.state.catalogScrollY,
        },
      });
    }
  };

  return (
    <Link
      to="/cards"
      className="button-link"
      onClick={handleClick}
    >
      ← Назад до карт
    </Link>
  );
}

export default BackToCardsLink;