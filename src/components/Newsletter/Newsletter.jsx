import "./Newsletter.css";

const Newsletter = ({ data }) => {
  return (
    <div className="newsletter">
      <h2>{data.title}</h2>
      <input type="email" placeholder={data.placeholder} />
      <button className="newsbtn">{data.buttonText}</button>
    </div>
  );
};

export default Newsletter;