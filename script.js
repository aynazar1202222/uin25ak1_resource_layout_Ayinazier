console.log(resources) //console logge resources på consolen

//bruk av querySelectorAll til å få med alt i nav ul li (kilde: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselectorall_class)
const navItmes = document.querySelectorAll("nav ul li")
const content = document.createElement("article")
document.body.appendChild(content)

//finn og update innhold ved hjep av .filter og .map
function updateContent(category){
    //bruk .filter til å finne riktig resource til riktig plass
    //bruk av join til å sette alle elementer til En (kilde: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_join2)
    const resource =resources.filter(res => res.category === category)[0];
    if(resource) {
        content.innerHTML = `
            <h2>${resource.category}</h2>
            <p>${resources.text}</p>
            <ul>
                ${resources.sources.map(source =>`<li><a href="${source.url}">${source.title}</a></li>`).join('')} 
            </ul>
        `
    }
}


//Bruk .map til å opptatere den vaglte nav
navItmes.forEach(nav => nav.classList.remove('selected'))
navItmes.forEach(nav => {
    if(nav.textContent === category){
        nav.classList.add('selected')
    }
})

//opptatere innhold klar på array 0
if(navItmes.length > 0 && resources.length >0){
    updateContent(navItems[0].textContent)
}

