import json from "./story.json"

export function program(element) {
    const textContainer = element.querySelector("#text_Container")
    const buttonContainer = element.querySelector('#button_Container')
    const startButton = element.querySelector('#start')
    let endGame = false
    let choses = {}

    startButton.addEventListener("click", (e) => {
        start()
    })

    function start() {
        run(0)
        endGame = false
        choses = {}
    }

    function run(position) {
        CheckEndGame(position)

        //ut side the story
        if (position == json.length) {
            removeContent()
            printErrorOrEndScene("Story dose not exist", "There is no more story, sorry! Want to play again?", "Yes")

        }
        //running the game  
        else if (endGame == false) {
            //can use the data from the json file 
            let story = json[position]

            //remove the content of the page 
            removeContent()

            //Print the titel 
            printH1Element(story)

            //print the text
            printPElement(story)

            //print the button and go to the next option
            printButtonNextOption(story)

        }
        //ending
        else {
            removeContent()
            //print the end scene content 
            printErrorOrEndScene("Story has ended", "The game has ended, want to play again?", "Yes")
        }
    }

    function CheckEndGame(checkId) {
        if (checkId < 0) {
            return endGame = true
        }
    }

    function removeContent() {
        textContainer.innerHTML = ""
        buttonContainer.innerHTML = ""
    }

    function printH1Element(titelId) {
        let h1 = makeH1()
        h1.innerHTML = titelId.titel
        textContainer.appendChild(h1)
    }

    function printPElement(textId) {
        let p = makeP()
        p.innerHTML = textId.text
        textContainer.appendChild(p)
    }

    function printButtonNextOption(storyId) {
        storyId.options.forEach((options) => {
            if (checkRequiredChoses(options)){
                let newButton = makeButton()
                newButton.innerText = options.text

                newButton.addEventListener("click", () => {
                    choses = Object.assign(choses, options.choses)
                    run(options.nextId)
                })
                console.log(choses)
                buttonContainer.appendChild(newButton)
            }
        })
    }

    function checkRequiredChoses(options) {
        // fixa 
        console.log(options.requiredChoses === choses)
        console.log(options.requiredChoses)
        if (options.requiredChoses) {
            return options.requiredChoses === choses
        } else {
            return options.requiredChoses == null
        }
    }

    function printErrorOrEndScene(h1Text, pText, buttonText) {
        let h1 = makeH1()
        let p = makeP()
        let button = makeButton();

        h1.innerHTML = h1Text
        p.innerHTML = pText
        button.id = 'rebut'
        button.innerHTML = buttonText

        textContainer.appendChild(h1)
        textContainer.appendChild(p)
        buttonContainer.appendChild(button)

        let rebut = element.querySelector('#rebut')
        //restart the game 
        rebut.addEventListener("click", (e) => {
            start()
        })

    }

    function makeH1() {
        return document.createElement("h1")
    }
    function makeP() {
        return document.createElement("p")
    }

    function makeButton() {
        return document.createElement("button")
    }


}
