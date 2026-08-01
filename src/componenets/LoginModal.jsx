import "./LoginModal.css";
import loginImage from "/src/assets/windowsLogo98.webp";

export default function LoginModal({ onClick }) {
  return (
    <>
      <div className="login-modal-overlay">
        <div className="login-modal">
          <div className="title-bar">
            <div className="title-bar-text">Enter Password</div>
            <div className="title-bar-controls">
              <button
                aria-label="Password and user login info"
                className="help"
              ></button>
              <button
                onClick={() => onClick()}
                aria-label="does nothing"
                className="close"
              ></button>
            </div>
          </div>
          <div className="login-page">
            <img src={loginImage} />
            <label htmlFor="user-selector" className="password">
              Select User:
            </label>
            <select className="user-selector" name="user-selector" size="3">
              <option>User</option>
              <option>Employer</option>
              <option>Admin</option>
            </select>
            <label className="password" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              className="password"
              type="password"
              placeholder="********"
            />
            <div className="login-btns">
              <button onClick={() => onClick()} className="login-btn">
                Log In
              </button>
              <button onClick={() => onClick()} className="close-login-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
