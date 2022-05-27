import styled from 'styled-components';
import { useState } from 'react';

import AboutMe from './AboutMe';
import './App.css';
import Button from './Button';
import Contacto from './Contacto';
import Footer from './Footer';
import Hero from './Hero';
import Logo from './Logo';
import Proyectos from './Proyectos';
import Modal from './Modal';

import imagenProyecto1 from './img/proyecto1.jpg';
import imagenProyecto2 from './img/proyecto2.jpg';
import imagenProyecto3 from './img/proyecto3.jpg';
import imagenProyecto3_2 from './img/proyecto3.12.jpg';
import imagenProyecto3_3 from './img/proyecto3.2.jpg';
import imagenProyecto3_4 from './img/proyecto3.3.jpg';
import imagenProyecto3_5 from './img/proyecto3.4.jpg';
import imagenProyecto4 from './img/proyecto4.jpg';
import imagenProyecto5 from './img/proyecto5.jpg';
import imagenProyecto6 from './img/proyecto6.jpg';
function App() {
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);
    const [modal6, setModal6] = useState(false);
    return (
        <div className='App'>
            <nav>
                <Logo className='nav-logo' />
                <ul className='nav-list'>
                    <li>
                        <a href='#header'>
                            <Button name='INICIO' />
                        </a>
                    </li>
                    <li>
                        <a href='#sobre'>
                            <Button name='SOBRE MI' />
                        </a>
                    </li>
                    <li>
                        <a href='#proyects'>
                            <Button name='MIS PROYECTOS' />
                        </a>
                    </li>
                    <li>
                        <a href='#contact'>
                            <Button name='CONTACTO' />
                        </a>
                    </li>
                </ul>
            </nav>
            <header className='app-header' id='header'>
                <Hero
                    windowW='98%'
                    h4='Hola, mi nombre es'
                    h1='Ivan Cardenas'
                    h6='Desarrollador de Software'
                    ph={true}
                    fColumn={false}
                />
            </header>
            <span id='sobre'></span>
            <AboutMe />
            <span id='proyects'></span>
            <Proyectos
                setModal={setModal}
                setModal2={setModal2}
                setModal3={setModal3}
                setModal4={setModal4}
                setModal5={setModal5}
                setModal6={setModal6}
            />
            <span id='contact'></span>
            <Contacto />
            <div>
                <Modal estado={modal} cambiarEstado={setModal} scroll={false}>
                    <Contenido>
                        <h1>ToDo app</h1>
                        <p>Anotador de tareas desarrollado con React</p>
                        <img src={imagenProyecto1} />
                        <p>
                            Cuenta con las funciones de crear tareas, marcarlas
                            como realizadas, eliminarlas y con un campo de
                            busqueda por palabras
                        </p>
                        <p>
                            Repositorio
                            <a
                                href='https://github.com/ivancard/todo-react'
                                target='_blanck'>
                                <b
                                    style={{
                                        backgroundColor: '#707070',
                                        color: 'white',
                                        padding: '2px 5px',
                                        borderRadius: '5px',
                                        marginLeft: '10px',
                                    }}>
                                    aquí
                                </b>
                            </a>
                        </p>
                        <a
                            href='https://ivancard.github.io/todo-react/'
                            target='_blank'>
                            <button>Probala aquí</button>
                        </a>
                    </Contenido>
                </Modal>
                <Modal estado={modal2} cambiarEstado={setModal2} scroll={false}>
                    <Contenido>
                        <h1>Administrador de veterinaria</h1>
                        <p>
                            Web app que administra los clientes y pacientes de
                            una veterinaria
                        </p>
                        <img src={imagenProyecto2} />
                        <p>
                            App desarrollada en HTML, CSS y JavaScript y usando
                            IndexedDB para persistir los datos. Cuenta con las
                            funciones de registrar citas veterinarias,
                            eliminarlas y editarlas.
                        </p>
                        <p>
                            Repositorio
                            <a
                                href='https://github.com/ivancard/administrador-citas'
                                target='_blanck'>
                                <b
                                    style={{
                                        backgroundColor: '#707070',
                                        color: 'white',
                                        padding: '2px 5px',
                                        borderRadius: '5px',
                                        marginLeft: '10px',
                                    }}>
                                    aquí
                                </b>
                            </a>
                        </p>
                        <a
                            href='https://ivancard.github.io/administrador-citas/'
                            target='_blank'>
                            <button>Probala aquí</button>
                        </a>
                    </Contenido>
                </Modal>
                <Modal estado={modal3} cambiarEstado={setModal3} scroll={true}>
                    <Contenido>
                        <h1>Administrador agencia de turismo</h1>
                        <p>
                            Aplicacion web que administra las operaciones de una
                            agencia de viajes. Tanto los productos y ventas como
                            los empleados y clientes
                        </p>
                        <img src={imagenProyecto3} />
                        <p>
                            Front-end desarrollado en HTML, CSS y JavaScript. El
                            back-end fue desarrollado en Java, usando Java JPA y
                            MySQL para la persistencia de datos y Java JSP para
                            el manejo del front-end.
                        </p>
                        <p>
                            Comencé diseñando el logo el interfaz de usuario con
                            Adobe XD.
                        </p>

                        <img src={imagenProyecto3_2} style={{ width: '40%' }} />
                        <p>Cuenta con un Login de empleados.</p>
                        <img src={imagenProyecto3_3} style={{ width: '40%' }} />
                        <p>Visualizacion de los datos almacenados.</p>
                        <img src={imagenProyecto3_4} style={{ width: '40%' }} />
                        <p>Y graficos estadisticos.</p>
                        <img src={imagenProyecto3_5} style={{ width: '40%' }} />
                        <p>
                            Video de demostración y explicación
                            <a
                                href='https://youtu.be/qihevLQWSZk'
                                target='_blanck'>
                                <b
                                    style={{
                                        backgroundColor: '#707070',
                                        color: 'white',
                                        padding: '2px 5px',
                                        borderRadius: '5px',
                                        marginLeft: '10px',
                                    }}>
                                    aquí
                                </b>
                            </a>
                        </p>
                        <p>
                            Repositorio
                            <a
                                href='https://github.com/ivancard/AgenciaTurismoTPOFinal'
                                target='_blanck'>
                                <b
                                    style={{
                                        backgroundColor: '#707070',
                                        color: 'white',
                                        padding: '2px 5px',
                                        borderRadius: '5px',
                                        marginLeft: '10px',
                                    }}>
                                    aquí
                                </b>
                            </a>
                        </p>
                    </Contenido>
                </Modal>
                <Modal estado={modal4} cambiarEstado={setModal4} scroll={false}>
                    <Contenido>
                        <h1>Gif App</h1>
                        <p>
                            Web app desarrollada en React que busca gifs atraves
                            de una API de Giphy
                        </p>
                        <img src={imagenProyecto4} />
                        <p>
                            Repositorio
                            <a
                                href='https://github.com/ivancard/gifexpert'
                                target='_blanck'>
                                <b
                                    style={{
                                        backgroundColor: '#707070',
                                        color: 'white',
                                        padding: '2px 5px',
                                        borderRadius: '5px',
                                        marginLeft: '10px',
                                    }}>
                                    aquí
                                </b>
                            </a>
                        </p>
                        <a
                            href='https://ivancard.github.io/gifexpert/'
                            target='_blank'>
                            <button>Probala aquí</button>
                        </a>
                    </Contenido>
                </Modal>
                <Modal estado={modal5} cambiarEstado={setModal5} scroll={false}>
                    <Contenido>
                        <h1>Heroes App</h1>
                        <p>
                            App desarrollada en React, usando datos desde un
                            achivo de javascript. La app lista los heroes de la
                            base de datos local y permite buscarlos por nombre.
                            Se usó React rooter para el manejo de las rutas y
                            bootstrap para el diseño.
                        </p>
                        <img src={imagenProyecto5} />
                        <p>
                            Repositorio
                            <a
                                href='https://github.com/ivancard/heroes-app'
                                target='_blanck'>
                                <b
                                    style={{
                                        backgroundColor: '#707070',
                                        color: 'white',
                                        padding: '2px 5px',
                                        borderRadius: '5px',
                                        marginLeft: '10px',
                                    }}>
                                    aquí
                                </b>
                            </a>
                        </p>
                        <a
                            href='https://heroes-app-inky.vercel.app/'
                            target='_blank'>
                            <button>Probala aquí</button>
                        </a>
                    </Contenido>
                </Modal>
                <Modal estado={modal6} cambiarEstado={setModal6} scroll={false}>
                    <Contenido>
                        <h1>Pagina web</h1>
                        <p>
                            Pagina web desarrollada en React, para fabrica
                            fundidora de aluminio.
                        </p>
                        <img src={imagenProyecto6} />
                        <p>
                            Repositorio
                            <a
                                href='https://github.com/ivancard/fundiciongarcia'
                                target='_blanck'>
                                <b
                                    style={{
                                        backgroundColor: '#707070',
                                        color: 'white',
                                        padding: '2px 5px',
                                        borderRadius: '5px',
                                        marginLeft: '10px',
                                    }}>
                                    aquí
                                </b>
                            </a>
                        </p>
                        <a
                            href='https://fundiciongarcia.vercel.app/'
                            target='_blank'>
                            <button>Probala aquí</button>
                        </a>
                    </Contenido>
                </Modal>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;

const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    max-height: 750px;
    h1 {
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    p {
        text-align: left;
        font-size: 18px;
        margin-bottom: 20px;
        max-width: 50%;
        align-self: baseline;
        /* background-color: #fff; */
        padding-left: 260px;
    }
    img {
        width: 60%;
        vertical-align: top;
        border-radius: 3px;
    }
`;
