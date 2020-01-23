import React from "react";

import instaLogo from "../../assets/images/insta.png";
import mailLogo from "../../assets/images/mail.svg";

import "./footer.style.sass";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__title">Ищи меня тут:</div>
      <div className="footer__links">
        <a href="http://vk.com/schubiin">
          <img
            className="links__logo"
            src="https://www.shareicon.net/data/2015/09/17/102625_vkontakte_512x512.png"
            alt="vk logo"
          />
        </a>
        <a href="http://vk.com/schubiin">
          <img className="links__logo" src={instaLogo} alt="insta logo" />
        </a>
        <a href="http://vk.com/schubiin">
          <img className="links__logo" src={mailLogo} alt="mail logo" />
        </a>
      </div>
      <div className="footer__copyright">
        Мы используем файлы cookie, чтобы улучшить работу и повысить
        эффективность сайта.
      </div>
    </div>
  );
}
