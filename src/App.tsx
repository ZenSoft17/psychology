import { Box, Heading } from '@chakra-ui/react';
import { block } from 'million/react';


const App: React.FC = block(() => {
  return (
    <Box>
      <Heading as='h1'>hola</Heading>
    </Box>
  );
});

export default App