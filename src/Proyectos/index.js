import ProyectoItem from '../ProyectoItem';
import Tittle from '../Title';
import './proyectos.scss';

import proyecto1 from '../img/proyecto1.jpg';
import proyecto2 from '../img/proyecto2.jpg';
import proyecto3 from '../img/proyecto3.jpg';
import proyecto4 from '../img/proyecto4.jpg';
import proyecto5 from '../img/proyecto5.jpg';
import proyecto6 from '../img/proyecto6.jpg';

export default function Proyectos({
    setModal,
    setModal2,
    setModal3,
    setModal4,
    setModal5,
    setModal6,
}) {
    return (
        <div className='proyects-conteiner'>
            <Tittle tittle='MIS PROYECTOS' size='3em' abs={false} />
            <div className='item-container'>
                <ProyectoItem image={proyecto1} setModal={setModal} />
                <ProyectoItem image={proyecto2} setModal={setModal2} />
                <ProyectoItem image={proyecto3} setModal={setModal3} />
            </div>
            <div className='item-container' style={{ marginTop: '0' }}>
                <ProyectoItem image={proyecto4} setModal={setModal4} />
                <ProyectoItem image={proyecto5} setModal={setModal5} />
                <ProyectoItem image={proyecto6} setModal={setModal6} />
            </div>
            <p style={{ textAlign: 'center' }} className='masProyectos'>
                <a href='https://github.com/ivancard' target='_blank'>
                    Más proyectos en mi GitHub
                </a>
            </p>
        </div>
    );
}
