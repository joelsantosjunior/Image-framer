const InstructionsList = () => {
  return (
    <div className="self-start ml-3 mb-6">
      <ol className="list-decimal text-sm font-medium">
        <li>Escolha uma imagem</li>
        <li>Selecione uma ou faça upload de novas molduras</li>
        {/* <li>Se necessário, corte a imagem</li> */}
        <li>Visualize o resultado</li>
        <li>Faça download da nova imagem no formato escolhido</li>
      </ol>

      <p className="text-sm text-gray-400 mt-3">
        A moldura será aplicada sobre 100% da imagem escolhida
      </p>
    </div>
  )
}

export default InstructionsList
