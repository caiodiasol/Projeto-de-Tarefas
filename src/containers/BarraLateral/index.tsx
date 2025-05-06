import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../Components/FiltroCard'
import { alterarTermo } from '../../reducers/filtro'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}
const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluidas"
              />
              <FiltroCard
                valor={enums.Prioridade.ALTA}
                criterio="prioridade"
                legenda="alta"
              />
              <FiltroCard
                valor={enums.Prioridade.MEDIA}
                criterio="prioridade"
                legenda="media"
              />
              <FiltroCard
                valor={enums.Prioridade.BAIXA}
                criterio="prioridade"
                legenda="baixa"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a Lista de Tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}
export default BarraLateral
// BarraLateral é um componente funcional que representa a barra lateral da aplicação
