import './App.css'
import React, {useCallback, useEffect, useReducer, useState} from 'react'

const taskReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TAREFA': 
    return[...state, action.payload]
    case 'CONCLUIDO':
      const atualizarTarefa = [...state]
      atualizarTarefa[action.payload].complete = true
      return atualizarTarefa 
    
    }
}

function App() {
const [tarefa, setTarefa] = useState('')

const [tarefaAtual, dispatch] = useReducer(taskReducer, [])

useEffect(() => {
const armazenarTarefa = JSON.parse(localStorage.getItem('tarefaAtual'))
},[])

useEffect(() =>{
localStorage.setItem('tarefaAtual', JSON.stringify(tarefaAtual))
})

const addTarefa = useCallback(() => {
  if(tarefa.trim() !== ''){
  dispatch({type: 'ADD_TAREFA', payload: {text: tarefa, completed: false}})
setTarefa('')
  }
},[tarefa])

  return ( 
    <>
      <div className="center">
        <h1>Lista de Tarefas</h1>
        <div className="input">
          <input type="text" placeholder="Nova Tarefa"  value={tarefa} onChange={(e) => setTarefa(e.target.value)}>
          </input>
         <button onClick={addTarefa}>Adicionar</button>
        </div>
        <ul>
          {tarefaAtual.map((tarefas, index) => (
<li kay={index}>{tarefas.text}</li>
          )
          )}
        </ul>
      </div>
    </>
  )
}

export default App
