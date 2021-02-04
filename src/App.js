import React, {useState} from 'react'
import Stage1 from './components/stage_1'
import Stage2 from './components/stage_2'
import { ToastContainer, toast } from 'react-toastify'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

export const MyContext = React.createContext()

function App () {
  
  const [stage, setStage] = useState(1)
  const [players, setPlayers] = useState([])
  const [result, setResult] = useState('')

  const handleAddPlayer = (nome)=> {
    setPlayers(playersAnteriores => [...playersAnteriores, nome])
  }

  const handleRemovePlayer = (index)=> {
    const newPlayers = players.filter((item, i) =>{
      return index !== i
    })
    setPlayers(newPlayers)
  }

  const handleNext = ()=> {
    if(players.length < 2){
      toast.error("Você precisa de mais de um jogador ! :(",{
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000
    })
    }
    else{
      setStage(2)
      generateLooser()
    }
  }

  const generateLooser = ()=> {
    setResult(players[Math.floor(Math.random() * players.length)])
  }
  
  const resetGame = ()=> {
    setStage(1)
    setPlayers([])
    setResult('')
  }

  return (
    <>
    <MyContext.Provider value={{handleAddPlayer, handleRemovePlayer, handleNext, generateLooser, resetGame, players, stage, result}} >
      <div className="wrapper">
        <div className="center-wrapper">
          <h1>Quem paga a conta?</h1>
          {stage === 1 ? 
          <Stage1/> 
          : 
          <Stage2/>
          }
        </div>
      </div>
    </MyContext.Provider>
    <ToastContainer/>
    </>
  );
}

export default App;
