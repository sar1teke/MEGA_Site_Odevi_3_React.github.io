import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Animasyonlu_Resim from './components/Animasyonlu_Resim';
import Animasyonlu_Resim_2 from './components/Animasyonlu_Resim_2';
import Animasyonlu_Resim_3 from "./components/Animasyonlu_Resim_3";
import Footer from "./components/Footer";

 function App() {
  const Bilgiler = [
    { id: 1, name: "İzmir", durum: 1 },
    { id: 2, name: "Denizli", durum: 1 },
    { id: 3, name: "Konya", durum: 1 },
    { id: 4, name: "4 Eylül İlkokulu", durum: 0 },
    { id: 5, name: "Ayşe-Mürüvvet Başer İHO", durum: 0 },
    { id: 6, name: "Ahmet Yesevi AİHL", durum: 0 },
    { id: 7, name: "Selçuk Üniversitesi", durum: 0 },
  ];

  return (
    <>
      <div className="Animasyonlu_Resim_2">
          <Animasyonlu_Resim_2/>
        </div>

    <h1>BENDENİZ İSMAİL SARITEKE:</h1>
 
    <h2>Kişisel Bilgiler:</h2>
      <h2>Yaşadığım Şehirler:</h2>
      <ul>
        {Bilgiler.filter((item) => item.durum == 1).map((item) => (
          <li key={item.id}>{item.name.toUpperCase()}</li>
        ))}
      </ul>

      <h2>Okuduğum Okullar:</h2>
      <ul>
        {Bilgiler.filter((item) => item.durum == 0).map((item) => (
          <li key={item.id}>{item.name.toUpperCase()}</li>
        ))}
      </ul>
      <p>Hoşgeldiniz.Bu sayfanın amacı kendim hakkında kısaca bilgi vermektir.Yukarıda yaşadığım şehirler ve okuduğum okullar hakkında kısa
        bir kısım bulunmakta aşağıda detaylı anlatım mevcuttur.
        </p>

        <div className="Animasyonlu_Resim_3">
          <Animasyonlu_Resim_3/>
        </div>
          <br></br>
      
      
    <div className="App2">
      <h1>Biyografi:</h1>
      <Animasyonlu_Resim />
    </div>

    <div className="genel-metin">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Cum, accusamus nesciunt excepturi praesentium dolor eaque ad rem voluptates aperiam
    obcaecati, perspiciatis in. Ipsum quam obcaecati autem voluptatibus explicabo eius
    maiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quaerat
    vitae. Cumque deleniti, eveniet sit eos doloribus maiores dolores magni numquam
    expedita totam voluptatibus possimus a? Nisi amet sequi Lorem ipsum, dolor sit
    amet consectetur adipisicing elit. Saepe eos debitis, accusantium molestiae optio
    ea placeat nostrum quo sequi quos voluptate aliquam, ipsa perspiciatis nemo culpa
    perferendis ratione ipsam. Facere.</div>

    <div className="genel-metin-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Cum, accusamus nesciunt excepturi praesentium dolor eaque ad rem voluptates aperiam
    obcaecati, perspiciatis in. Ipsum quam obcaecati autem voluptatibus explicabo eius
    maiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quaerat
    vitae. Cumque deleniti, eveniet sit eos doloribus maiores dolores magni numquam
    expedita totam voluptatibus possimus a? Nisi amet sequi Lorem ipsum, dolor sit
    amet consectetur adipisicing elit. Saepe eos debitis, accusantium molestiae optio
    ea placeat nostrum quo sequi quos voluptate aliquam, ipsa perspiciatis nemo culpa
    perferendis ratione ipsam. Facere.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Cum, accusamus nesciunt excepturi praesentium dolor eaque ad rem voluptates aperiam
    obcaecati, perspiciatis in. Ipsum quam obcaecati autem voluptatibus explicabo eius
    maiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quaerat
    vitae. Cumque deleniti, eveniet sit eos doloribus maiores dolores magni numquam
    expedita totam voluptatibus possimus a? Nisi amet sequi Lorem ipsum, dolor sit
    amet consectetur adipisicing elit. Saepe eos debitis, accusantium molestiae optio
    ea placeat nostrum quo sequi quos voluptate aliquam, ipsa perspiciatis nemo culpa
    perferendis ratione ipsam. Facere.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Cum, accusamus nesciunt excepturi praesentium dolor eaque ad rem voluptates aperiam
    obcaecati, perspiciatis in. Ipsum quam obcaecati autem voluptatibus explicabo eius
    maiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quaerat
    vitae. Cumque deleniti, eveniet sit eos doloribus maiores dolores magni numquam
    expedita totam voluptatibus possimus a? Nisi amet sequi Lorem ipsum, dolor sit
    amet consectetur adipisicing elit. Saepe eos debitis, accusantium molestiae optio
    ea placeat nostrum quo sequi quos voluptate aliquam, ipsa perspiciatis nemo culpa
    perferendis ratione ipsam. Facere.
    </div>
      <br />
    <div className="Footer-cls">
      <Footer/>
    </div>
    </>
  );
}

export default App;
