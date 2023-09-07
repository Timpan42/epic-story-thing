import json from "./story.json"

export function program(element, ) {
    const textContainer = element.querySelector("#text_Container")
    const buttonContainer = element.querySelector('#button_Container')
    const startButton = element.querySelector('#start')

    startButton.addEventListener("click", (e)=>{
        start()
    })
    
    function start() {
            run()
            textContainer.innerHTML = ""
        }

    function run(position = 0){
        let story = json[position]
        textContainer.innerHTML = ""
        buttonContainer.innerHTML = ""

        let p = document.createElement("p")
        p.innerText = story.text
        textContainer.appendChild(p)

        story.options.forEach((options)=>{
            let newButton = document.createElement('button')
            newButton.innerText = options.text
        
            newButton.addEventListener("click", () =>{
                run(element, options.nextId)
            })

            buttonContainer.appendChild(newButton)
        })
    }
}
