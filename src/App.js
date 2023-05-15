import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homee from './pageInfo/Homee';
function App() {
  return (
    <BrowserRouter>
   <Routes>
     <Route path="/" element={<Homee />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
