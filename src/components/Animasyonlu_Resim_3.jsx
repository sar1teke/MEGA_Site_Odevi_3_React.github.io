// Animasyonlu_Resim_3.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Animasyonlu_Resim_3.css";

const Animasyonlu_Resim_3 = () => {
  return (
    <motion.div
      className="scrollable-image-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="parallax-image" />
      <div className="content">
        <p>
          Öncelikle merhabalar ben Selçuk Üniversitesi bilgisayar
    mühendisliği  sınıf öğrencisi İsmail sarıteke öncelikle bu alanın neden seçtiğimi ve
    bu alanda ne yapmak istediğimden kısaca bahsedeyim bilgisayarlar hep ilgimi çekmiştir
    daha doğrusu teknolojinin bu kadar hızlı gelişmesi teknolojinin bu denli durdurulamaması
    hep ilgimi çekmiştir hepimizin bildiği gibi teknolojinin bir sonu yok bu da benim ilgimi
    çeken asıl nokta yani gittiği yere kadar gidiyor ben de onunla beraber gideyim nereye kadar
    gidebilirim diye düşündüm o yüzden bu alanı seçtim bu alanda çalışmaya başladığımdan itibaren
    özellikle bilgisayar mühendisliğine başlığımdan itibaren çeşitli dalları deneyimledim bunlardan
    kısaca bahsedeyim siber güvenlik, mobil programlama,   veri işleme, görüntü işleme hepsiyle
    tek tek ilgilendim ama şimdi Mega yazılım akademisinde katkılarıyla web alanında çalışıyorum
    bu sitede bunun bir örneğidir aşağı kısımda da genel biyografimden bahsedeceğim.
        </p>
      </div>
    </motion.div>
  );
};

export default Animasyonlu_Resim_3;
