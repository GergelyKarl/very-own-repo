import React from "react";
import "./FrontPage.css";
const FrontPage = () => {
  return (
    <div className="frontPage">
      <div className="frontPage__wrapper">
        <div className="frontPage__left">
          <div className="frontPage__left__with__image">
            <img
              src="https://kep.cdn.indexvas.hu/1/0/3666/36667/366677/36667709_2800907_34990fd4e497ff1a11f4bedca86388e9_wm.jpg"
              alt=""
            />
            <a href="#">
              <h1>
                Befalazva találtak rá, felújítják Horthy Miklós étkezővagonját
              </h1>
            </a>
            <p>A Turán 9 története sokkal több mint gasztronómia.</p>
          </div>
          <div className="frontPage__left__strory1">
            <a href="https://index.hu/belfold/2021/02/14/klubradio-vege-2021-februar-14/">
              {" "}
              <h1>
                VÉGE EGY KORSZAKNAK, ÉJFÉLKOR ELHALLGAT A KLUBRÁDIÓ ANALÓG ADÁSA
              </h1>
            </a>
          </div>
          <div className="frontPage__left__strory2">
            <a href="#">
              {" "}
              <h3>Otthonából vitték el Zsuzsa hároméves kisfiát a rendőrök</h3>
            </a>
          </div>
          <div className="frontPage__left__strory3">
            <a href="#">
              {" "}
              <h3>
                15 éves cserediákkal szexelt a tanárnő, a férje végignézte
              </h3>
            </a>
            <p>
              Nemcsak megrontotta a kiskorút, de alkoholt és drogot is adott
              neki.
            </p>
          </div>
          <div className="frontPage__left__strory4">
            <h1>
              <a href="https://index.hu/belfold/2021/02/14/mit-tegyen-ha-mar-megadta-az-adatait-a-csaloknak-/">
                MIT TEGYEN, HA MÁR MEGADTA AZ ADATAIT A CSALÓKNAK?{" "}
              </a>
            </h1>
          </div>
        </div>
        <div className="frontPage__right">
          <div className="frontPage__right__with__image">
            <img
              src="https://kep.cdn.indexvas.hu/1/0/3666/36669/366696/36669695_2801053_c9be0fdfd848b50105bdfa8cd3bae3fe_wm.jpg"
              alt=""
            />
            <a href="https://index.hu/kulfold/2021/02/14/meghan-markle-terhes/">
              {" "}
              <h1>Második gyermekét várja Meghan Markle</h1>
            </a>
            <p>Hamarosan kistestvére születik Archie-nak.</p>
          </div>
          <div className="frontPage__right__story1">
            <a href="https://index.hu/belfold/2021/02/14/felolvad-az-orszag-10-fok-is-lehet/">
              {" "}
              <h1>FELOLVAD AZ ORSZÁG, 10 FOK IS LEHET</h1>
            </a>
          </div>
          <div className="frontPage__right__story2">
            <a href="https://index.hu/kulfold/2021/02/14/who-mar-egy-tucat-virusvarians-jelen-volt-vuhanban-2019-decembereben/">
              {" "}
              <h3>
                WHO-kutató: már jóval felfedezése előtt ott volt a koronavírus
                Kínában
              </h3>
            </a>

            <p>
              Már egy tucat vírusvariáns jelen volt Vuhanban 2019 decemberében,
              ami az sejteti, hogy nem a kínai városból származik a kórokozó.
            </p>
          </div>
          <div className="frontPage__right__story3">
            <a href="https://index.hu/kulfold/2021/02/14/lengyelorszag_sieles_botrany_ivas_buli_verekedes_zakopaneban/">
              {" "}
              <h3>
                Feloldottak egy korlátozást: isznak, buliznak és bunyóznak a
                lengyelek, egy autó kigyulladt
              </h3>
            </a>
            <p>Megnyitották a sípályákat, elszabadult a pokol Zakopanéban.</p>
          </div>
          <div className="frontPage__right__story4">
            <a href="https://index.hu/tech/2021/02/14/tobor-hidegpolus-bukk-fennsik-jeg-nyaron-is-/">
              <h3>Mi az a töbör, ahol nyáron is megmarad a jég?</h3>
            </a>
            <p>
              A Bükk-fennsík dolináiban nyáron is megmarad a jég, itt van hazánk
              hidegpólusa.
            </p>
          </div>
          <div className="frontPage__right__story5">
            <a href="https://index.hu/belfold/2021/02/14/elvittek-a-fonyeremenyt-a-lotton/">
              <h1>ELVITTÉK A FŐNYEREMÉNYT A LOTTÓN</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
