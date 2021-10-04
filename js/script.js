
const dna = document.getElementById("dnaCode");
const show = document.getElementById("btnShow")
const strand = document.getElementById("strandPattern")

const codons ={
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
}

show.addEventListener("click", (e)=>{
    let dnaCodeLower = dna.value
    let delay = 0.5;
    const dnaCode = dnaCodeLower.toUpperCase()
    if(dnaCode.length == 0){
        window.alert("empty")
    }else{
        for(let i = 0; i < dnaCode.length; i++){
            if(dnaCode[i] === "A" | dnaCode[i] === "T" | dnaCode[i] === "G" | dnaCode[i] === "C" ){
              adcElement(dnaCode[i], codons[dnaCode[i]], i, delay)
            }else{
                window.alert(`Letter ${dnaCode[i]} out of the ADN pattern, will be ignored`)
            }
        }
    }
})

function adcElement(codeFoward, codeReverse, num, delay){
        let delayNum = delay * num
        if(num == 0){
        let divCreate = document.createElement('div')
        divCreate.classList.add("slide")
        let paragraphFoward = document.createElement('p')
        paragraphFoward.classList.add(`foward`,`wavesDown0`)
        let paragraphrReverse = document.createElement('p')
        paragraphrReverse.classList.add("reverse", "wavesUp0")
        let contentFoward = document.createTextNode(codeFoward)
        let contentReverse = document.createTextNode(codeReverse)
        paragraphFoward.appendChild(contentFoward)
        paragraphrReverse.appendChild(contentReverse)
        divCreate.appendChild(paragraphFoward)
        divCreate.appendChild(paragraphrReverse)
        strand.appendChild(divCreate)
        }else{
            let divCreate = document.createElement('div')
            divCreate.classList.add("slide")
            let paragraphFoward = document.createElement('p')
            paragraphFoward.classList.add(`foward`,`wavesDown0`)
            paragraphFoward.style.animationDelay= `${delayNum}s`;
            let paragraphrReverse = document.createElement('p')
            paragraphrReverse.classList.add("reverse", "wavesUp0")
            paragraphrReverse.style.animationDelay = `${delayNum}s`;
            let contentFoward = document.createTextNode(codeFoward)
            let contentReverse = document.createTextNode(codeReverse)
            paragraphFoward.appendChild(contentFoward)
            paragraphrReverse.appendChild(contentReverse)
            divCreate.appendChild(paragraphFoward)
            divCreate.appendChild(paragraphrReverse)
            strand.appendChild(divCreate)
        }
}
