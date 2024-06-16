import CalContainer from './components/CalContainer/CalContainer';

import styles from './styles/App.module.css';

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <CalContainer />
    </div>
  );
}

export default App;
