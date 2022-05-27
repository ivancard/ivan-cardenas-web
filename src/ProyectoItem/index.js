import React from 'react';

import './proyectoItem.scss';

export default function ProyectoItem({ setModal, image }) {
    return (
        <React.Fragment>
            <div
                className='cuadro'
                style={{
                    backgroundImage: `url(${image})`,
                    width: '95%',
                    height: '50%',
                    borderRadius: '5px',
                    border: '4px solid #707070',
                    backgroundSize: 'auto',
                    filter: 'saturate(0.4)',
                    transition: 'all 300ms',
                }}>
                <button
                    onClick={() => setModal(true)}
                    style={{
                        marginTop: '230px',
                        zIndex: '10',
                        marginLeft: '120px',
                    }}>
                    VER
                </button>
            </div>
        </React.Fragment>
    );
}
