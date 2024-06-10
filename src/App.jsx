import './App.css'
import React, { useCallback, useReducer, useState } from 'react'

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TAREFA':
      return [...state, action.payload]
    case 'CONCLUIDO':
      const atualizarTarefa = [...state]
      atualizarTarefa[action.payload].complete = true
      return atualizarTarefa

  }
}

function App() {
  const [tarefa, setTarefa] = useState('')

  const [tarefaAtual, dispatch] = useReducer(taskReducer, [])

  const addTarefa = useCallback(() => {
    if (tarefa.trim() !== '') {
      dispatch({ type: 'ADD_TAREFA', payload: { text: tarefa, completed: false } })
      setTarefa('')
    }
  }, [tarefa])

 const concluirTarefa = useCallback((index) =>{
  dispatch ({type: 'CONCLUIDO', payload: index})

})
  return (
    <>
      <div className="center">
        <h1>Lista de Tarefas</h1>
        <div className="input">
          <input type="text" placeholder="Nova Tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)}>
          </input>
          <button onClick={addTarefa}>Adicionar</button>
        </div>
        <ul>
          {tarefaAtual.map((tarefas, index) => (
            <li key={index}>
              <span style={{ textDecoration: tarefas.completed ? 'line-through' : 'none' }}>
                {tarefas.text}
                {console.log(tarefas.completed)}
              </span>
              {
                !tarefaAtual.completed && (
                  <>
                    <button onClick={() => concluirTarefa(index)}>
                      {console.log(index)}
                      Concluir tarefa
                    </button>
                  </>
                )
              }
            </li>
          )
          )}
        </ul>
      </div>
    </>
  )
}

export default App
