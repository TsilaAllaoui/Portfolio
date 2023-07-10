import { Link } from "react-router-dom";
import "../styles/ErrorPage.scss";

function ErrorPage() {
  return (
    <div id="error-page">
      <div>
        <h2>Nothing to see here for now!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
