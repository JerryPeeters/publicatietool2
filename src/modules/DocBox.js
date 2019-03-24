import React from 'react';

export default class DocBox extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return (
            <div style={styles.documentBox} id='DocBox'>
                <div style={styles.box} contentEditable='true'>Side B.</div>
            </div>
        )}
}

const styles =  {
    box: {
        margin: '15px',
      },
    documentBox: {
        background: '#F08080',
        width: '60%',
        wordWrap: 'break-word',
        cursor: 'text',
    }, 
}