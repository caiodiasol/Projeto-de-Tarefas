import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enuns from '../../utils/enums/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enuns.Prioridade
  status?: enuns.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enuns.Prioridade.ALTA) return variaveis.vermelho
    if (props.prioridade === enuns.Prioridade.MEDIA) return variaveis.amarelo2
  } else {
    if (props.status === enuns.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enuns.Status.CONCLUIDA) return variaveis.verde
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 16px;
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 16px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  risize: none;
  border: none;
  background-color: transparent;
`

export const Acoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const BotaoCancelarERemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
