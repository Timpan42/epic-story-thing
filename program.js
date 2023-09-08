import json from "./story.json"

export function program(element,) {
    const textContainer = element.querySelector("#text_Container")
    const buttonContainer = element.querySelector('#button_Container')
    const startButton = element.querySelector('#start')
    let endGame = false

    console.log(startButton)

    startButton.addEventListener("click", (e) => {
        start()
    })

    function start() {
        run(0)
        endGame = false
    }

    function run(position) {
        CheckEndGame(position)
        if (endGame == false) {

            //can use the data from the json file 
            let story = json[position]

            //remove the content of the page 
            removeContent()

            // Ska leta efter Id i story.json för att komma rätt 

            //print the text
            printPElement(story)

            //print the button and go to the next option 
            printButtonNextOption(story)

        } else {
            removeContent()
            //print the end scene content 
            printEndScene()

            let rebut = element.querySelector('#rebut')
            //restart the game 
            rebut.addEventListener("click", (e) => {
                start()
            })
        }
    }

    function CheckEndGame(checkId) {
        if (checkId < 0) {
            return endGame = true
        }
    }

    function removeContent(){
        textContainer.innerHTML = ""
        buttonContainer.innerHTML = ""
    }

    function printPElement(textId){
        let p = document.createElement("p")
        p.innerHTML = textId.text
        textContainer.appendChild(p)
    }

    function printButtonNextOption(storyId){
        storyId.options.forEach((options) => {
            let newButton = document.createElement('button')
            newButton.innerText = options.text

            newButton.addEventListener("click", () => {
                run(options.nextId)
            })

            buttonContainer.appendChild(newButton)
        })
    }

    function printEndScene(){
        let p = document.createElement("p")
        let button = document.createElement("button")

        p.innerHTML = "The game has ended, want to play again?"
        button.id = 'rebut'
        button.innerHTML = "Yes"

        textContainer.appendChild(p)
        buttonContainer.appendChild(button)
        
    }

    
}
