import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c378',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#D86E8F',
      corSecundaria: '#FAE985'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}

export default App;
