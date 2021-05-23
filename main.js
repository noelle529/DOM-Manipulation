var mainHeading = document.getElementById('main-heading')
mainHeading.innerHTML='New DOM Layout'

var headerColor= document.getElementById('page-header')

headerColor.classList.remove('bg-dark')
headerColor.classList.add('bg-success')

document.getElementById('para1').textContent='The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.'

document.getElementById('para2').textContent='The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.'

function newParagraph() {
   document.getElementById('para4').textContent='The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.'
}
var boxOne= document.getElementById('red')
boxOne.classList.remove('bg-white')
boxOne.classList.add('bg-danger')


var boxTwo = document.getElementById('blue')
boxTwo.classList.remove('bg-white')
boxTwo.classList.add('bg-primary')


var boxThree= document.getElementById('yellow')
boxThree.classList.remove('bg-white')
boxThree.classList.add('bg-warning')

var boxFour= document.getElementById('green')
boxFour.classList.remove('bg-white')
boxFour.classList.add('bg-success')

var boxFive= document.getElementById('black')
boxFive.classList.remove('bg-white')
boxFive.classList.add('bg-dark')
