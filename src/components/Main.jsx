import spotify from "..//assets/desktop/spotify.svg";
import apple from "..//assets/desktop/apple-podcast.svg";
import pocket from "..//assets/desktop/pocket-casts.svg";
import google from "..//assets/desktop/google-podcasts.svg";
import { useState } from "react";
const Main = () => {
  const [formData, setFormData] = useState({ email: "" });
  function handleForm(e) {
    e.preventDefault();
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    alert("Your form has been submitted");
    setFormData("");
  }
  return (
    <main>
      <div className="hero">
        <h1>
          Publish your podcasts
          <span>Everywhere</span>
        </h1>
        <p>
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Enter address"
            required
            value={formData.email}
            className="submit_email"
            onChange={handleForm}
          />
        </label>
        <input type="submit" value="Request access" />
      </form>
      <div className="socials">
        <img className="spotify socialsList" src={spotify} alt="spotify" />
        <img className="apple socialsList" src={apple} alt="apple" />
        <img className="google socialsList" src={google} alt="google" />
        <img className="pocket socialsList" src={pocket} alt="pocket" />
      </div>
    </main>
  );
};

export default Main;
