import "./boxCard.css";

export default function BoxCard(props) {
  return (
    <div className="cardbox-main">
      <div className="card-data">
        <div className="postTitle">{props.title}</div>
        <div className="postBody">{props.description}</div>
      </div>
    </div>
  );
}
