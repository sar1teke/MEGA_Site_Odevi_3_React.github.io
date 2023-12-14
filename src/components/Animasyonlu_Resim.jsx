// src/components/AnimasyonluResim.js
import React from 'react';
import { motion } from 'framer-motion';

const Animasyonlu_Resim = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img 
        src="./img/resim-1.jpg"
        alt="Animasyonlu_Resim"
        style={{ width: '300px', height: '200px' }}
      />
    </motion.div>
  );
};

export default Animasyonlu_Resim;
