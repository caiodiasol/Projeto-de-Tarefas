import * as S from './styles'
import { useState } from 'react'

import * as enuns from '../../utils/enums/Tarefa'

type Props = {
  titulo: string
  prioridade: enuns.Prioridade
  status: enuns.Status
  descricao: string
}
const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.Acoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarERemover onClick={() => setEstaEditando(false)}>
              cancelar
            </S.BotaoCancelarERemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarERemover>Remover</S.BotaoCancelarERemover>
          </>
        )}
      </S.Acoes>
    </S.Card>
  )
}

export default Tarefa
