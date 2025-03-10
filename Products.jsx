import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div style={productContainer}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        제품 소개
      </motion.h2>
      <p className="section-subtitle">
        최고의 품질과 기술력으로 만든 제품들을 소개합니다
      </p>
      
      <div style={productGrid}>
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            style={productCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img src={product.image} alt={product.name} style={productImage} />
            <h3 style={productTitle}>{product.name}</h3>
            <p style={productDescription}>{product.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
