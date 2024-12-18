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

  let imageChoice = '';



  switch (randomNumber) {

    case 0:

      eightBall = 'it is certain'

      imageChoice = 'imgs/certain.jpg'

      break

    case 1:

      eightBall = 'it is decidedly so'
      imageChoice = 'imgs/decide.jpg'

      break

    case 2:

      eightBall = 'reply hazy try again'
      imageChoice = 'imgs/hazy.jpg'

      break

    case 3:

      eightBall = 'cannot predict now'
      imageChoice = 'imgs/predict.jpg'

      break

    case 4:

      eightBall = 'do not count on it'
      imageChoice = 'imgs/count.jpg'

      break

    case 5:

      eightBall = 'my sources say no'
      imageChoice = 'imgs/sources.jpg'

      break

    case 6:

      eightBall = 'signs point to yes'
      imageChoice = 'imgs/signs.jpg'

      break

    case 7:

      eightBall = 'outlook not so good'
      imageChoice = 'imgs/outlook.jpg'

      break

  }


  console.log(eightBall)


  responseText.innerText = `${userName} has asked ${userQuestion} to the almighty 8 Ball. The 8 ball has replied ${eightBall}!`


  responseImg.src = imageChoice


}
