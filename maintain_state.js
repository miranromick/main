







var currentState = {

  availableGreetings: [
                        {
                          name:"Bob",
                         image: '<img src="bob.png"/>'
                       },
                        {name:"Mary",
                         image:'<img src="mary.png"/>'
                       },
                       {
                         name:"Carson",
                         image:'<img src="carson.png"/>'
                       },
                       {
                        name:"Nick",
                        image:'<img src="nick.jpeg"/>'
                      },
                       {
                         name:"Michael",
                         image:'<img src="michael.png"/>'
                       },
                     ],
  greetingIndex: 0
}

var element = document.getElementById('greeting')
element.innerHTML = "Hello " + currentState.availableGreetings[currentState.greetingIndex].name

var photo = document.getElementById('photo')
photo.innerHTML =  currentState.availableGreetings[currentState.greetingIndex].image

function greetNext() {
  currentState.greetingIndex += 1
  if (currentState.greetingIndex === currentState.availableGreetings.length){
    currentState.greetingIndex = 0
  }
  element = document.getElementById('greeting')
  element.innerHTML = "Hello " + currentState.availableGreetings[currentState.greetingIndex].name

  photo = document.getElementById('photo')
  photo.innerHTML =  currentState.availableGreetings[currentState.greetingIndex].image



}







//
