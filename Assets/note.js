let selectId = $id => document.querySelector($id)

const addNew = selectId('#save')
let noteText = selectId('#text')
const notePath = selectId('#notes')
let noteObj = []
// function call to load local storage
show(noteObj)
// add note

addNew.addEventListener('click', () => {
    noteObj = JSON.parse(localStorage.getItem("notes"))
    noteObj.push(noteText.value)
    localStorage.setItem("notes", JSON.stringify(noteObj))
    console.table(noteObj)
    show()
    noteText.value = ""
})
// show notes function
function show () {
    noteObj = JSON.parse(localStorage.getItem("notes"))
    let prueba = []
    prueba = JSON.parse(localStorage.getItem("notes")).flat(Infinity)
    let cnt = ""
    if(noteObj.length === 0) {
        notePath.innerHTML = "Add a note"
    }else {
        prueba.forEach((e,i) => {
            cnt += `<div class="nts">
                        <h6 class="note-ttl">Post${i + 1}</h6>
                        <p class="note-cnt">${e}</p>
                        <div class="delete" >
                            <button id="delete" onClick = borrar(${i})>Delete</button>
                        </div>
                    </div>`
        })
        console.log(prueba)
        notePath.innerHTML = cnt
    }
}
function borrar (idx) {
    noteObj = JSON.parse(localStorage.getItem("notes"))
    console.table(noteObj)
    noteObj.splice(idx, 1)
    localStorage.setItem("notes", JSON.stringify(noteObj))
    show()

}

