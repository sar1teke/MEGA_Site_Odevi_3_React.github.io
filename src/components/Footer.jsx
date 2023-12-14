// Footer.js
import React from "react";
import "./Footer.css";

const Footer_1 = () => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/ismail-sariteke-501357226/">
        <img
          className="linkedln-logo"
          src="./public/img/linkedln_logo_2.png"
          alt="Linkedn"
          title="Linkedln Hesabım"
        />
      </a>
      <a href="https://github.com/sar1teke">
        <img
          className="linkedln-logo"
          src="./public/img/github_logo.webp"
          alt="Github"
          title="Github Hesabım"
        />
      </a>
      <a href="mailto:ismailsariteke784@gmail.com">
        <img
          className="linkedln-logo"
          src="./public/img/gmail_logo.png"
          alt="Mail"
          title="Bana Mail Gönder :)"
        />
      </a>
      <div className="footer_text">
        <p>
          <div className="footer_text_2">
            <p>Bu Proje MEGA Yazılım Akademisi 5.Hafta Ödevidir. &copy; İsmail
            Sarıteke. Tüm hakları saklıdır.</p>
          </div>
        </p>
      </div>
    </footer>
  );
};

export default Footer_1;
