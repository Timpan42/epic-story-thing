import './style.css'
import { program } from './program.js'


document.querySelector('#app').innerHTML = `
<div>
  <div id="text_Container">
    <div class="h1Box" id="h1_Container">
      <h1> Hello and welcome to the story of Tim Fagerdal,the human fruit</h1>
      <h2> This is a interactive story about me as a fruit, that loves making food, it is mostly pasta. It is written by
        ChatGPT so it is going to be weird</h2>
    </div>
    <div class="pBox" id="p_Container">
      <p class="start"> The "game" works by making chooses by pressing the buttons below, som times there will be a
        input
        prompt where
        you type what you want to do. The chooses that are possible will be writhen in <b>bold</b> and
        <ins>underlined.</ins>
      </p>
      <p class="start"> <b> <ins>Do you want to play?</ins></b> </p>
    </div>
  </div>

  <div class="buttonBox" id="button_Container">
    <button id="start"> YES </button>
  </div>
  <div id="input_Container">

  </div>

  </main>
  `

  program(document.querySelector('#app'))