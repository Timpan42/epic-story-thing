export function story(element) {
    const text = element.querySelector("#text")
    const buttons = element.querySelector('#buttons')

    let choses = {}

    buttons.addEventListener('click', (e) => {
        //text.document.createElement('p')

        while(buttons.firstChild){
            buttons.removeChild(buttons.firstChild)
        }

        for (let i = 0; i < arr_objects[0].options.length; i++) {
            const newButton = document.createElement('button')
            console.log(arr_objects[0].options[i])
            newButton.innerText = arr_objects[0].options[i].text
            buttons.appendChild(newButton)
        }
    })

    const arr_objects = [
        {
            id: 0,
            text: "Hello my friend this is a test",
            options: [{
                text: "test",
                choses: { start: true },
            }, {
                text: "testX",
                choses: { start: false }
            }
            ]
        }, {
            id: 1,
            text: "Hello my friend this is a test2",
            options: [{
                text: "test",
                choses: { start: true },
            }, {
                text: "testX",
                choses: { start: false }
            }
            ]
        }
    ]

}