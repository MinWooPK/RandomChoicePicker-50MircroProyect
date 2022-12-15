const news = document.getElementById('tags');
const newText = document.getElementById('textarea')



newText.addEventListener('keyup', function (event) {

    addTag(event.target.value)
    if (event.key === 'Enter') {
        //tarda 10 milisegundo en vaciar el imput
        setTimeout(() => {
            event.target.value = ''
        }, 10)

        randomSelect()
    }
}
)
function addTag(input) {
    const tags = input.split(',')
        .filter(tag => tag.trim() !== '').map(tag => tag.trim())
    //Estamos buscando los elementos que no tengan espacios.
    news.innerHTML = ''
    //se pone new hasta que le hago split
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        news.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 50

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        if (randomTag !== undefined) {
            highlightTag(randomTag)

            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    }, 100);
    // tarda 100 milisegundo en marcarmelo como higlight y otros 100 milisegundo como no 

    // //cuanto tiempo tarda en quitarse el setinterval
    setTimeout(() => {
        clearInterval(interval) //importante

        //para dejar marcado el numero

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
// function addTag() {
//     const newTag = news.innerHTML = newText.value;
//     let newNewTag = newTag.split(',')
//     // console.log(newNewTag)
//     newNewTag.classList.add('tag');
//     news.append(newTag)
// }