// import React from 'react'
// import './paragraph.css'
// import generateColor from './generateColor';

// const getColor = () => {
//     let paragrafo = document.getElementById('paragraph')
//      paragrafo.style.color = generateColor();
    
// }
// let paragraphComponent = {
//     color: generateColor(),
//     textTransform: 'uppercase',
//     title: 'Clique em no texto e veja uma magica acontecer ou recarregue a pagina.'
// }

// const Paragraph = () => {
//     return (
//         <div>
//             <p id="paragraph" style={paragraphComponent} onClick={getColor}>{paragraphComponent.title}</p>
//         </div>
//     )
// }

// Paragraph.defaultProps = {
//     color: 'black'
// }
// export default Paragraph
import React, { useState } from 'react';
import './paragraph.css';
import generateColor from './generateColor';

const Paragraph = ({ initialTitle }) => {
    // State to manage the paragraph's color
    const [color, setColor] = useState(generateColor());

    // Function to handle color change
    const handleColorChange = () => {
        setColor(generateColor());
    };

    return (
        <div>
            <p
                id="paragraph"
                style={{ color, textTransform: 'uppercase' }}
                onClick={handleColorChange}
            >
                {initialTitle || 'Clique no texto e veja uma mágica acontecer ou recarregue a página.'}
            </p>
        </div>
    );
};

// Default props for the component
Paragraph.defaultProps = {
    initialTitle: 'Clique no texto e veja uma mágica acontecer ou recarregue a página.'
};

export default Paragraph;
