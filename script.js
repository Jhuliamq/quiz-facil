const $iniciarButton = document.querySelector(".iniciar-quiz")
const $questionsContainer = document.querySelector(".questao-container")
const $respostas = document.querySelector(".answers-container") 
const $textoQuestao = document.querySelector(".questions")
const $proximaQuestao = document.querySelector(".proxima-questao")

$iniciarButton.addEventListener("click", iniciar)
$proximaQuestao.addEventListener("click", displayNextQuestion)

let perquntaAtual = 0
let corretas = 0

function iniciar(){
  $iniciarButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion(){
  resetar()

  if(perquntaAtual === questao.length){
    return fim()
  }

  $textoQuestao.textContent = questao[perquntaAtual].question
  questao[perquntaAtual].answers.forEach(answers =>{
    const newResposta = document.createElement("button")
    newResposta.classList.add("answers", "button")
    newResposta.textContent = answers.option
    if(answers.correct){
      newResposta.dataset.correct = answers.correct
    }
    $respostas.appendChild(newResposta)

    newResposta.addEventListener("click", selecionarResposta)
  })
}

function resetar(){
  while($respostas.firstChild){
    $respostas.removeChild($respostas.firstChild)
  }

  $proximaQuestao.classList.add("hide")
}

function selecionarResposta(event){
  const respostaClicada = event.target

  if(respostaClicada.dataset.correct){
    document.body.classList.add("correct")
    corretas++

  }else{
    document.body.classList.add("incorrect")
  }

  document.querySelectorAll(".answers").forEach(button =>{
    if(button.dataset.correct){
      button.classList.add("correct")
    }else{
      button.classList.add("incorrect")
    }

    button.disabled = true
  })

  $proximaQuestao.classList.remove("hide")
  perquntaAtual++
}

function fim(){
  const totalQuestao = questao.length
  const perfomace = Math.floor(corretas * 100 / totalQuestao)

  let mensagem = ""

  switch(true){
    case(perfomace => 90):
      mensagem = "Excelente trabalho :)"
      break
    case(perfomace >= 70):
      mensagem = "Bom trabalho ;)"
      break
    case(perfomace => 50):
      mensagem = "Pode melhorar:|"
      break
    default:
      mensagem = "Precisa estudar mais :/"
  }

  $questionsContainer.innerHTML = 
  `
    <p class = "mensagem_final">
    Você acertou ${corretas} de ${totalQuestao} questões <br>
    <span> Resultado: ${mensagem}</span>
    </p>
    <button onclick = window.location.reload() class = "button">
      Refazer
    </button>
  `
}
