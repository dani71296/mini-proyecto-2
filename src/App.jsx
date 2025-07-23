import Cont1 from './components/Cont1';
import Cont2 from './components/Cont2';
import Cont3 from './components/Cont3';

function App() {
  return (
    <div className="md:flex min-h-screen">
      <Cont1 />
      <div className="flex-1">
        <Cont2 />
        <Cont3 />
      </div>
    </div>
  );
}

export default App;
