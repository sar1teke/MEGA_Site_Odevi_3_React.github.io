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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          voluptatem animi. Impedit tempore fugiat modi eius autem nihil
          molestias neque. Laudantium sint quisquam ullam tempore corporis
          voluptatem vero et fugiat! Commodi modi enim quidem sed exercitationem
          ratione, voluptatibus sit? Odio dicta, veniam asperiores qui deleniti
          velit impedit est atque commodi accusamus similique numquam ab
          cupiditate suscipit ipsam consequuntur facere hic. Tempora natus velit
          eum dignissimos totam porro quo recusandae esse! Magni, fugit officia?
          Mollitia, culpa perspiciatis distinctio fugiat fugit est quis ut rerum
          non magnam suscipit obcaecati quos, numquam laboriosam. Corporis
          possimus sint molestiae dolor voluptas quas dolore ipsam magni sit
          facere alias maxime animi incidunt veniam quo, debitis repudiandae
          explicabo laboriosam eveniet odit soluta saepe! Iusto possimus harum
          magni? Ab consectetur nisi doloremque vitae ut nesciunt expedita et
          odio. Commodi error saepe eius modi quibusdam soluta aut, cupiditate
          id quos. Officia neque in impedit dignissimos facere ex modi
          perspiciatis!
        </p>
      </div>
    </motion.div>
  );
};

export default Animasyonlu_Resim_3;
