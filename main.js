import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { story } from './story.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="text">
      <h1> Hello and welcome to the story of Tim Fagerdal,the human fruit</h1>
      <h2> This is a interactive story about me as a fruit, that loves making food, it is mostly pasta. It is written by
        ChatGPT so it is going to be weird</h2>
      <p> The "game" works by making chooses by pressing the buttons below, som times there will be a input prompt where
        you type what you want to do. The chooses that are possible will be writhen in <b>bold</b> and
        <ins>underlined.</ins>
      </p>
      <p> <b> <ins>Do you want to play?</ins></b> </p>
    </div>
    
    <div id="buttons">
      <button> YES </button>
      <button> NO </button>
    </div>

</main>
`

story(document.querySelector('#app'))