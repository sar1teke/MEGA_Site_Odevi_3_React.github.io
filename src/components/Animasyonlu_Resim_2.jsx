// src/components/Animasyonlu_Resim_2.js
import React from 'react';
import { motion } from 'framer-motion';

const Animasyonlu_Resim_2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        className='img-1'
        src="./img/Galatasaray_Sports_Club_Logo.png"
        alt="Animasyonlu_Resim_2"
        style={{ width: '250px', height: '300px'}}
      />
    </motion.div>
  );
};

export default Animasyonlu_Resim_2;