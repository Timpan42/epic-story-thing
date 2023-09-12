import json from "./story.json"

export function program(element) {
    const textContainer = element.querySelector("#text_Container")
    const h1Container = element.querySelector("#h1_Container")
    const pContainer = element.querySelector("#p_Container")
    const buttonContainer = element.querySelector('#button_Container')
    const startButton = element.querySelector('#start')
    const inputContainer = element.querySelector('#input_Container')
    let endGame = false
    let choses = []
    let meatName = ""
    let wrongName = false

    startButton.addEventListener("click", (e) => {
        start()
    })

    function start() {
        run(0)
        endGame = false
        choses = []
    }

    function run(position) {
        CheckEndGame(position)

        //ut side the story
        if (position >= json.length || position == null) {
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
        h1Container.innerHTML = ""
        pContainer.innerHTML = ""
        buttonContainer.innerHTML = ""
        inputContainer.innerHTML = ""
    }

    function printH1Element(titelId) {

        if (wrongName) {
            let h1 = makeH1()
            h1.innerHTML = ":|"
            h1Container.appendChild(h1)
        } 
        else {
            let h1 = makeH1()
            h1.innerHTML = titelId.titel
            h1Container.appendChild(h1)
        }
    }

    function printPElement(textId) {
        if (wrongName) {
            let p = makeP()
            p.innerHTML = ":|"
            pContainer.appendChild(p)
            wrongName = false
        } 
        else if(textId.meatName){
            let p = makeP()
            p.innerHTML = textId.text + " " + meatName
            pContainer.appendChild(p)
        } 
        else {
            let p = makeP()
            p.innerHTML = textId.text
            pContainer.appendChild(p)
        }

    }

    function printButtonNextOption(storyId) {
        storyId.options.forEach((options) => {
            if (checkInputField(options)) {
                if (checkRequiredChoses(options)) {
                    let newInputField = makeInput()
                    let newButton = makeButton()

                    newInputField.id = 'msg'
                    newButton.innerText = options.text

                    newButton.addEventListener("click", () => {

                        const msg = element.querySelector('#msg').value;
                        let stringCompare = msg.toLowerCase()

                        if (stringCompare === "tim") {
                            meatName = "TimTim"
                            wrongName = true
                        } 
                        else if(stringCompare === ""){
                            meatName = "Bob"
                        } 
                        else {
                            meatName = msg
                        }
                        choses = Object.assign(choses, options.choses)
                        run(options.nextId)
                        console.log(meatName)
                    })

                    inputContainer.appendChild(newInputField)
                    inputContainer.appendChild(newButton)
                }
            } else {
                if (checkRequiredChoses(options)) {
                    let newButton = makeButton()
                    newButton.innerText = options.text

                    newButton.addEventListener("click", () => {
                        choses = Object.assign(choses, options.choses)
                        run(options.nextId)
                    })
                    buttonContainer.appendChild(newButton)
                }
            }
        })
    }

    function checkInputField(options) {
        if (options.input) {
            return true
        } else {
            return false
        }
    }

    function checkRequiredChoses(options) {
        if (options.requiredChoses) {
            return JSON.stringify(options.requiredChoses) === JSON.stringify(choses)
        }
        else {
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

        h1Container.appendChild(h1)
        pContainer.appendChild(p)
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

    function makeInput() {
        return document.createElement("INPUT")
    }

}
