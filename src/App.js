import React from 'react';
import './index.css';

const styles = {
  box: {
    margin: '15px',
  },
  builderBox: {
    background: '#F08080',
    width: '35%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    minHeight: '75vh',
  },
  documentBox: {
    background: '#F08080',
    width: '60%',
  },
  title: {
    marginBottom: '0px',
  },
  underTitle: {
    marginTop: '0px',
  },
};

class App extends React.Component {
  render() {
    return (
      <>
        <h1 style={styles.title}>Voorbeeld Template</h1>
        <h6 style={styles.underTitle}>Documentbouwer 1.0</h6>
        <div id='appContainer' style={styles.container}>
          <div style={styles.builderBox}>
            <div style={styles.box}>Side A.</div>
          </div>
          <div style={styles.documentBox}>
            <div style={styles.box}>Side B.</div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
