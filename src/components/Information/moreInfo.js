import React from 'react';
<<<<<<< HEAD
import { Button } from 'antd';

import { Carousel } from 'antd';
=======
import { Button, Carousel } from 'antd';
>>>>>>> 0969e835e934ce7b9aeea4d7e24c9ca15aac1171

const items = [
  {
    key: '1',
<<<<<<< HEAD
    title: 'Web and mobile payment built for developers',
    content: 'Our innovative web and mobile payment solutions make transactions fast, secure, and effortless for both you and your customers. Say goodbye to the hassle of traditional payment methods and embrace the future of seamless payments.',
  },
  {
    key: '2',
    title: 'Work better together. Schedule meetings',
    content: "Collaborate and achieve your goals as a team. Join forces, share ideas and leverage each others strengths to reach new heights together. Let's work together and create a brighter future for us all.",
  },
  {
    key: '3',
    title: 'The best app to increase your productivity',
    content: 'Boost your productivity and streamline your workday with our cutting-edge app. Stay organized, prioritize tasks, and never miss a deadline. Get more done in less time and achieve your goals faster than ever before.',
  },
]

function AppMoreInfo() {
  return (
    <div className='backgroundDark'>
      <div className="custom-style" style={{ color: 'aliceblue' }}>
        <section id="stars"></section>
        <section id="stars2"></section>
        <section id="stars3"></section>
        <div id="hero" className="heroBlock">
          <Carousel>
            {items.map(item => {
              return (
                <div key={item.key} className="container-fluid">
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <div className="btnHolder">
                      <Button type="primary" size="large">Learn More</Button>
                      <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                    </div>
                  </div>
                </div>
              );
            })}
=======
    title: 'Accede a los juegos al instante',
    content: 'Por un buen precio accede desde donde quieras y cuando quieras a la gran variedad que ofrecemos en nuestra tienda.',
  },
  {
    key: '2',
    title: 'Únete a la Comunidad',
    content: "Conoce a nuevas personas, únete a grupos, forma clanes, chatea dentro de un juego, ¡y mucho más! Con más de 100 millones de posibles amigos (o enemigos), la diversión nunca acaba.",
  },
  {
    key: '3',
    title: 'Publica tu juego',
    content: 'Te ayudamos con un conjunto de herramientas y servicios que ayuda a los desarrolladores y editores a distribuir de la mejor manera posible sus juegos en Game Vault.',
  },
];

function AppMoreInfo() {
  const handleClick = () => {
    window.location.href = '/home'; // Cambia '/target-page' a la ruta de tu página
  };

  return (
    <div className='backgroundDark'>
      <div className="custom-style" >
        <section id="stars"></section>
        <section id="stars2"></section>
        <section id="stars3"></section>
        <div id="moreInfo" className="moreInfoBlock">
          <Carousel>
            {items.map(item => (
              <div key={item.key} className="container-fluid">
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <div className="btnHolder">
                    <Button type="primary" size="large" onClick={handleClick}>Learn More</Button>
                  </div>
                </div>
              </div>
            ))}
>>>>>>> 0969e835e934ce7b9aeea4d7e24c9ca15aac1171
          </Carousel>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default AppMoreInfo;
=======
export default AppMoreInfo;
>>>>>>> 0969e835e934ce7b9aeea4d7e24c9ca15aac1171
