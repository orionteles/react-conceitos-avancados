import { BrowserRouter } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Menu from './components/Menu';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecalho />
        <Conteudo />
        <Menu />
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default App;
