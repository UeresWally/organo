import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57c378',
    },
    {
      id: uuidv4(),
      nome: 'Front-end',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06869',
    },
    {
      id: uuidv4(),
      nome: 'Ux e Design',
      cor: '#D86E8F',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])
  
  const [colaboradores, setColaboradores] = useState([])
  function deletarColaborador(id) {
    console.log(id)
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }


  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4 }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={ colaborador => setColaboradores([...colaboradores, colaborador])}
      />
      {times.map((time, indice) => 
        <Time 
          mudarCor={mudarCorTime}
          key={indice}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      )}
    </div>
  );
}

export default App;
