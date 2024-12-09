import ProductGrid from './components/ProductGrid/ProductGrid';
import InfoStrip from './components/InfoStrip/InfoStrip';
import { Typography } from '@mui/material';

const App = () => {
  return (
    <div className='App'>
      <Typography sx={{ mb: 5, mt: 5 }} variant='h2'>
        The Fab 4
      </Typography>
      <InfoStrip text='Buy multiples original canine or human products' />
      <ProductGrid />
    </div>
  );
};

export default App;
