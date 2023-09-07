export function story(element) {
    const text = element.querySelector("#text")
    const buttons = element.querySelector('#buttons')

    let choses = {}
    let index = 0

    buttons.addEventListener('click', (e) => {
        //text.document.createElement('p')

        while(buttons.firstChild){
            buttons.removeChild(buttons.firstChild)
        }

        for (let i = 0; i < arr_objects[0].options.length; i++) {
            const newButton = document.createElement('button')
            newButton.innerText = arr_objects[index].options[i].text
            buttons.appendChild(newButton)
        }
    })

    const arr_objects = [
        {
            id: 0,
            text: "Hello my friend this is a test ",
            options: [{
                text: "test 1",
                choses: { start: true },
                nextId: 1
            }, {
                text: "test 1",
                choses: { start: false },
                nextId: 1
            }
            ]
        }, {
            id: 1,
            text: "Hello my friend this is a test 2",
            options: [{
                text: "test 2",
                choses: { start: true },
                nextId: 0
            }, {
                text: "test 2",
                choses: { start: false },
                
            }
            ]
        }
    ]

}