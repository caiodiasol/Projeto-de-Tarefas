import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../utils/enums/Tarefa'
import Tarefa from '../../src/models/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.ALTA,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.ALTA,
      enums.Status.CONCLUIDA,
      'Rever aula 2 do módulo',
      2
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.ALTA,
      enums.Status.PENDENTE,
      'Estudar o eseEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})
export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
