import json from "./story.json"

export function program(element, ) {
    const textContainer = element.querySelector("#text_Container")
    const buttonContainer = element.querySelector('#button_Container')
    const startButton = element.querySelector('#start')

    startButton.addEventListener("click", (e)=>{
        start()
    })
    
    function start() {
            run(0)
        }

    function run(position){
        textContainer.innerHTML = ""
        buttonContainer.innerHTML = ""

        let story = json[position]
        
        console.log(position)

        let p = document.createElement("p")
        p.innerHTML = story.text
        textContainer.appendChild(p)

        story.options.forEach((options)=>{
            let newButton = document.createElement('button')
            newButton.innerText = options.text
        
            newButton.addEventListener("click", () =>{
                run(options.nextId)
            })

            buttonContainer.appendChild(newButton)
        })
    }
}
