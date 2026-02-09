import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-box">
        <img src="/logo.png" alt="Loading" className="loader-logo" />
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
