import React from 'react';
import './index.css';
import DocBox from './modules/DocBox.js'


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
          <DocBox />
        </div>
      </>
    );
  }
}

export default App;

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
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    minHeight: '75vh',
  },
  title: {
    marginBottom: '0px',
  },
  underTitle: {
    marginTop: '0px',
  },
};