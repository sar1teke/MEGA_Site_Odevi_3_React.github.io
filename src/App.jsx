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

    <div className="genel-metin">4 Mayıs 2003 tarihinde Ağrı'da doğdum orada 4-5 yıl kadar kaldıktan sonra İzmir'in
    Tire ilçesine yerleştim İzmir'in Tire ilçesinde ilk öğretimin ilk 4 yılını 4 Eylül
    ilköğretim okulunda tamamladım daha sonrasında Denizli'ye taşındım burada Ayşe
    Mürüvvet Başar İmam Hatip ortaokulunda ortaokul eğitimi tamamladım sonrasında ise
    Ahmet Yesevi Anadolu İmam Hatip lisesi'nde lise eğitimimi tamamladım daha sonrasında
    ise YKS sınavına girerek Konya Selçuklu'da bulunan Selçuk Üniversitesi teknoloji
    fakültesi bilgisayar mühendisliği bölümüne yerleştim bu bölümde 2021'den beri eğitim
    almaktayım okuduğunuz için teşekkür ederim.
    </div>

    <div className="genel-metin-2">Biraz da bilgisayar mühendisliği hakkındaki düşüncelerimi anlatmak istiyorum bilgisayar
    mühendisliğine tam anlamıyla bir mühendislik denilemez bence zaten yurt dışında da
    bilgisayar bilimleri olarak geçmekte bence de bilgisayar bir bilim yani bilgisayarın
    işleyişi bilgisayarın temel yapısı bilgisayarın donanımı bunlar Bir bilimin ürünü bilgisayar
    kendi başına sadece 1 ve 0'dan anlayan düz bir makine ama bizim ona yüklediklerimiz 
    Bizim ona anlattıklarımız yani kısaca algoritmalarımız bilgisayarı bilgisayar yapan şeydir 
    neden bilgisayarın üzerinde bu kadar duruyorum çünkü bilgisayar olmasaydı daha doğrusu bilgisayar
    teknolojisi bugün bu noktaya gelmeseydi şu an birçok şey bizim gördüğümüzden bizim yaşadığımızda
    çok daha farklı olurdu örnek olarak tıpın şu an geldiği nokta veya gelecekteki geleceği
    noktanın temelinde bilgisayar bilimleri yatmakta Bilgisayar bilimleri diğer bütün mühendisleri
    de beslemekte makine mühendisliğinde elektrik mühendisliği inşaat mühendisliğinide yani bilgisayar
    mühendisliği sayesinde diğer bütün bilimler diğer bütün mühendislikler artık daha rahat daha stabil
    çalışabilmekte çünkü bilgisayarın önünde bir engel yok bilgisayarın duracağı bir nokta yok yazılımın
    bitti diyebileceğimiz bir noktası yok yani kısaca şunu söylemek istiyorum artık yazılım bilimin en
    temel parçası. 
    Teşekkürler.
    </div>
      <br />
    <div className="Footer-cls">
      <Footer/>
    </div>
    </>
  );
}

export default App;
