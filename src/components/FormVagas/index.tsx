import { FormEvent, useState } from 'react'
import { BotaoPesquisa, Pesquisa, TextoPesquisa } from './FormVagas'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Pesquisa onSubmit={aoEnviarForm}>
      <TextoPesquisa
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisa type="submit">Pesquisar</BotaoPesquisa>
    </Pesquisa>
  )
}
export default FormVagas
