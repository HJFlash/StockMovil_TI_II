"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const palabras = ['Impulsando Almacenes', 'Organizacion', 'Facilidad', 'Innovacion', 'Trabajo', 'Empresa', 'Stock', 'Local', 'Movil'];

const TransicionPalabras = () => {
  const [indicePalabra, setIndicePalabra] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      // Cambiar la palabra cada 2 segundos
      setIndicePalabra((prev) => (prev + 1) % palabras.length);
    }, 2500);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <AnimatePresence with mode='wait'>
      <motion.div
        key={palabras[indicePalabra]}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {palabras[indicePalabra]}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransicionPalabras;