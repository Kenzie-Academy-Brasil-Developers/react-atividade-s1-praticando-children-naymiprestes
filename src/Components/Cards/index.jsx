import "./style.css";

export default function CenteredCard(props) {
  return (
    <div className="card">
      <span className="children"> {props.children}</span>
    </div>
  );
}
