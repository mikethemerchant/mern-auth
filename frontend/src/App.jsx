import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <Container className='my-2'>
        <HomeScreen />
      </Container>
    </>
  );
};

export default App;