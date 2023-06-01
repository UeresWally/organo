import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57c378',
    },
    {
      nome: 'Front-end',
      cor: '#82CFFA',
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      nome: 'Devops',
      cor: '#E06869',
    },
    {
      nome: 'Ux e Design',
      cor: '#D86E8F',
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])

  const [colaboradores, setColaboradores] = useState([])
  function deletarColaborador() {
    console.log('deletando colaborador')
  }

  function mudarCorTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }));
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(times => 
        <Time 
          mudarCor={mudarCorTime}
          key={times.nome} 
          time={times}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === times.nome)}
          aoDeletar={deletarColaborador}
        />
      )}
    </div>
  );
}

export default App;
