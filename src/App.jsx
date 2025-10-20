import { useState } from "react";
import "./App.css";

function App() {
  const phrases = [
    "Acredite em si mesmo e tudo será possível.",
    "Você é mais forte do que imagina.",
    "Cada dia é uma nova chance de recomeçar.",
    "Não tenha medo de falhar, tenha medo de não tentar.",
    "A persistência é o caminho do êxito.",
    "Grandes conquistas começam com pequenas atitudes.",
    "O sucesso nasce do esforço diário.",
    "Não espere por oportunidades, crie-as.",
    "Você só falha quando desiste de tentar.",
    "Seja a mudança que você quer ver no mundo.",
    "O segredo do progresso é começar.",
    "Acredite: o seu esforço vai valer a pena.",
    "Não importa o quão devagar você vá, desde que não pare.",
    "Dificuldades preparam pessoas comuns para destinos extraordinários.",
    "O impossível é apenas uma opinião.",
    "Transforme seus sonhos em metas e suas metas em conquistas.",
    "Coragem é agir mesmo com medo.",
    "Faça hoje o que vai te orgulhar amanhã.",
    "A jornada é longa, mas a vitória é certa.",
    "A motivação te impulsiona, mas o hábito te mantém no caminho.",
  ];

  const [phrase, setPhrase] = useState("");
  const [visible, setVisible] = useState(true);

  function handlePhrase() {
    setVisible(false);
    setTimeout(() => {
      const iRandom = Math.floor(Math.random() * phrases.length);
      setPhrase(phrases[iRandom]);
      setVisible(true);
    }, 500);
  }

  return (
    <div className="container">
      <h1 className="title">Gerador de Frase Motivacional</h1>
      <p className={`phrase ${visible ? "fade" : "fade hidden"}`}>
        {phrase ? phrase : "Clique no botão abaixo para gerar uma frase!"}
      </p>
      <button className="btn" onClick={handlePhrase}>
        Gerar Frase
      </button>
    </div>
  );
}

export default App;
