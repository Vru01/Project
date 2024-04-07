import React, { useState } from 'react';
import './View.css';

const cropInfo = {
  rice: {
    description: "Rice, a staple food for over half the world's population, thrives in warm climates with high humidity and abundant water. It requires temperatures between 20°C and 35°C during the growing season and at least 1000 mm of rainfall. Ideal soil conditions for rice cultivation include clayey or loamy soil with good drainage, capable of retaining water without becoming waterlogged. Description: Rice is a cereal grain cultivated worldwide, predominantly in Asia. It's a primary food source, rich in carbohydrates and essential nutrients, crucial for global food security. Its cultivation spans traditional manual methods to modern mechanized techniques, reflecting its cultural and economic significance globally."
  },
  maize: {
    description: `Maize, commonly known as corn, is a cereal grain cultivated worldwide, particularly in warm climates with temperatures ranging from 18°C to 32°C during the growing season. It requires well-distributed rainfall and thrives in soils with good drainage, preferably loamy soils rich in organic matter. Maize serves as a staple food for many populations globally and is also utilized in livestock feed, biofuels, and industrial products. Its cultivation methods vary, from traditional practices to modern techniques, reflecting its agricultural and economic importance.`
  },
  chickpea: {
    description: `Chickpea, also known as garbanzo bean or Bengal gram, is a legume crop cultivated in temperate climates with mild winters and cool summers. It requires temperatures between 15°C and 25°C during the growing season and moderate rainfall. Chickpea grows best in well-drained loamy soils with good organic matter content, tolerating slightly acidic to neutral soil conditions. It serves as a nutritious food source, rich in protein, fiber, vitamins, and minerals, contributing to global food security and dietary diversity. Cultivation methods for chickpea vary from traditional practices to modern agricultural techniques, reflecting its cultural and economic significance worldwide.`
  },
  kidneybeans: {
    description: `Kidney beans, also known as rajma, thrive in warm-season climates with temperatures ranging from 20°C to 30°C. They require well-distributed rainfall throughout the growing season and cannot tolerate waterlogging. Kidney beans prefer well-drained loamy soils with good organic matter content, avoiding heavy clay soils. Renowned for their rich flavor and kidney shape, they are a staple ingredient in various cuisines worldwide, offering a good source of protein, fiber, vitamins, and minerals. Cultivation of kidney beans ranges from traditional methods to modern agricultural practices, highlighting their culinary and nutritional importance globally.`
  },
  pigeonpeas: {
    description: `Pigeon peas, also known as arhar or toor dal, thrive in warm tropical climates with temperatures ranging from 20°C to 35°C. They are well-adapted to regions with erratic rainfall patterns and can tolerate drought conditions. Pigeon peas prefer a wide range of soil types, including sandy, loamy, and clayey soils, with a pH between 5.5 and 7.5. Known for their drought tolerance and nutritional value, pigeon peas are a vital food and fodder crop in tropical and subtropical regions, providing a rich source of protein, fiber, vitamins, and minerals. Their cultivation spans centuries, with traditional practices coexisting with modern agricultural techniques, highlighting their cultural and agricultural significance globally.`
  },
  mothbeans: {
    description: `Moth beans, also known as matki or dew beans, thrive in warm and arid climates with temperatures ranging from 25°C to 35°C. They are drought-resistant legumes that can grow in poor soils with low fertility. Moth beans are valued for their high protein content and nutritional benefits, making them an important food source, especially in regions with limited resources. Cultivation of moth beans is widespread in South Asia, particularly in India, where they are used in various traditional dishes. These legumes play a vital role in sustainable agriculture and food security, offering resilience to adverse environmental conditions.`
  }
  ,
  mungbean: {
    description: `Mung beans, also known as green gram, thrive in warm and humid climates with temperatures ranging from 25°C to 35°C. They require well-drained loamy soil with a pH level between 6.2 and 7.2. Mung beans are versatile legumes known for their high protein content, making them a popular food source in many cuisines around the world. Cultivation of mung beans dates back thousands of years, with origins in the Indian subcontinent. Today, they are cultivated in various tropical and subtropical regions, contributing to food security and sustainable agriculture practices.`
  },
  blackgram: {
    description: `Black gram, also known as urad bean, is a warm-season pulse crop that thrives in tropical and subtropical regions. It requires temperatures between 25°C to 35°C during the growing season and a well-drained loamy soil with good moisture retention capacity. Black gram is highly adaptable and can tolerate a wide range of soil pH levels, from acidic to alkaline. It is an essential crop in South Asian cuisine and is used in various dishes such as dal (lentil soup), curries, and papad (crispy snack). Black gram cultivation contributes significantly to sustainable agriculture and food security, providing a good source of protein and essential nutrients for millions of people around the world.`
  },
  lentil: {
    description: `Lentils are edible legumes known for their lens-shaped seeds. They are rich in protein, fiber, and various essential nutrients. Lentil cultivation requires temperate climates with well-drained soil and moderate rainfall. It is a versatile crop used in various cuisines worldwide, especially in soups, stews, and salads. Lentils are an excellent source of plant-based protein and are prized for their nutritional value and culinary versatility.`
  },

  pomegranate: {
    description: `Pomegranate is a fruit-bearing deciduous shrub or small tree known for its vibrant red, leathery skin and juicy, ruby-red arils. It thrives in semi-arid to subtropical climates with well-drained soil and plenty of sunlight. Pomegranates are rich in antioxidants, vitamins, and minerals, making them a popular choice for both culinary and medicinal purposes. The fruit is enjoyed fresh, juiced, or used in cooking, baking, and beverages. Pomegranate cultivation is valued for its economic importance and health benefits.`
  },

  banana: {
    description: `Bananas are tropical fruits cultivated primarily for their edible fruit, which is botanically classified as a berry. They thrive in warm, humid climates with well-drained soil and regular rainfall. Bananas are rich in potassium, vitamins, and dietary fiber, making them a nutritious and energy-boosting snack. They are consumed worldwide and are used in various culinary applications, including smoothies, desserts, and savory dishes. Banana cultivation plays a significant role in agriculture and trade, providing a valuable source of income for farmers in tropical regions.`
  },

  mango: {
    description: `Mango is a tropical fruit known for its sweet, juicy flesh and distinctive aroma. It thrives in warm, frost-free climates with well-drained soil and ample sunlight. Mango trees can grow in a variety of soil types, including sandy, loamy, and clay soils. Mangoes are rich in vitamins, minerals, and antioxidants, making them a nutritious addition to the diet. They are enjoyed fresh, juiced, or used in cooking, baking, and beverages. Mango cultivation is economically significant in many tropical regions, contributing to both domestic consumption and international trade.`
  },
  grapes: {
    description: 'Grapes are woody perennial vines cultivated for their juicy berries, used for making wine, juice, jam, and raisins. They thrive in temperate and Mediterranean climates with warm, dry summers and cool, wet winters. Grapes prefer well-drained loamy soils with a slightly acidic to neutral pH.',
  },

  watermelon: {
    description: 'Watermelon is a vine-like flowering plant known for its large, sweet, and juicy fruit, high in water content and vitamins. It thrives in warm, sunny climates with sandy loam soils and good drainage, preferring slightly acidic to neutral pH levels.',
  },

  muskmelon: {
    description: 'Muskmelon, also called cantaloupe, is a sweet and fragrant fruit cultivated in warm, sunny climates. It requires well-drained sandy loam soils with slightly acidic to neutral pH levels. Muskmelons thrive in temperatures between 25°C and 35°C.',
  },

  apple: {
    description: 'Apple trees produce crisp, sweet or tart fruits and thrive in temperate climates with cool winters and mild summers. They require well-drained loamy soils with good water retention and a slightly acidic to neutral pH.',
  },

  orange: {
    description: 'Oranges are citrus fruits known for their juicy and sweet-tart flavor, high vitamin C content, and bright color. They grow in subtropical and tropical climates with sandy loam soils, abundant sunlight, and slightly acidic to neutral pH levels.',
  },

  papaya: {
    description: 'Papaya trees produce sweet and juicy fruits rich in vitamins, minerals, and enzymes. They thrive in warm tropical climates with temperatures between 25°C and 30°C and well-drained sandy loam soils with slightly acidic to neutral pH levels.',
  },

  coconut: {
    description: 'Coconut palms produce edible fruits, coconut water, and copra in tropical coastal regions. They require warm temperatures, high humidity, and well-drained sandy soils with saline tolerance. Coconut palms thrive in temperatures between 20°C and 30°C.',
  },

  cotton: {
    description: 'Cotton plants produce soft, fluffy fibers used in textiles, requiring a long, warm growing season with plenty of sunshine. They grow best in well-drained loamy soils with good fertility and slightly acidic to neutral pH levels.',
  },

  jute: {
    description: 'Jute plants yield long, soft, shiny bast fibers used for making coarse, strong threads. They grow in warm and humid tropical climates with high rainfall and fertile, well-drained soils with slightly acidic to neutral pH levels.',
  },

  coffee: {
    description: 'Coffee beans are roasted and brewed into a popular beverage, cultivated in tropical climates with temperatures between 15°C and 24°C. Coffee plants require acidic, well-drained soils rich in organic matter, with abundant rainfall distributed evenly throughout the year.',
  }
};

export default function View() {
  const [cropData, setCropData] = useState(localStorage.getItem('cropName'));

  const handleChangeCrop = (newCrop) => {
    setCropData(newCrop);
    localStorage.setItem('cropName', newCrop);
  };

  return (
    <div className="container">
      {cropData ? (
        <div className="crop-info">
          <div className="info-box1 crop-name-box" onClick={() => handleChangeCrop('rice')}>
            {/* <h3>Crop Name</h3> */}
            <p>{cropData}</p>
          </div>
          <br />
          <br />
          <div className="info-box">
            <div className="desc">
              <h3>Description</h3>
              <p>{cropInfo[cropData].description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="no-info">No crop information found.</p>
      )}
    </div>
  );
}
