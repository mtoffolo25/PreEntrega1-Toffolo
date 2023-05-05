import Spinner from "react-bootstrap/Spinner";
import "./Loading.css";

export function Loading() {
  return (
    <div className="divSpinner">
      <Spinner animation="border" role="status" className="animacion">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
