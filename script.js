// Get user Name

let userName = prompt('Hello, What is your name?')


let responseImg = document.getElementById('response-img')

let responseText = document.getElementById('response-text')

let greeting = document.getElementById('greeting')



//Input user name to Website

userName

  ? (greeting.innerText = `Hello, ${userName}!`)

  : (greeting.innerText = 'Hello Stranger!')






function shakeMagic8Ball () {

  //Get User Question

  let userQuestion = prompt('What do you want to ask the 8 Ball?')

  


  //DO NOT TOUCH THIS CODE!

  let randomNumber = Math.floor(Math.random() * 8)


  let eightBall = ''

  let imageChoice = ''



  switch (randomNumber) {

    case 0:

      eightBall = 'It is certain'

      imageChoice = 'image1.jpg'

      break

    case 1:

      eightBall = 'It is decidedly so'

      break

    case 2:

      eightBall = 'Reply hazy try again'

      break

    case 3:

      eightBall = 'Cannot predict now'

      break

    case 4:

      eightBall = 'Do not count on it'

      break

    case 5:

      eightBall = 'My sources say no'

      break

    case 6:

      eightBall = 'Signs point to yes'

      break

    case 7:

      eightBall = 'Outlook not so good'

      break

  }


  console.log(eightBall)


  responseText.innerText = `${userName} has asked ${userQuestion} to the almighty 8 Ball. The 8 ball he replied ${eightBall}!`


  responseImg.src = imageChoice


}
