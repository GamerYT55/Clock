var hoursHand = document.querySelector('.hand.hours')
var secondsHand = document.querySelector('.hand.seconds')
var minutesHand = document.querySelector('.hand.minutes')
var minD = document.getElementById('minutos')

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty('--rotation', rotationPercentage * 360)
}

const setClock = () => {
  const curretnDate = new Date()
  
  const secondsPercentage = curretnDate.getSeconds() / 60
  const hoursPercentage = curretnDate.getHours() / 12
  const minutesPercentage = curretnDate.getMinutes() /60
  
  setRotation(hoursHand, hoursPercentage)
  setRotation(secondsHand, secondsPercentage)
  setRotation(minutesHand, minutesPercentage)
}

setClock()

setInterval(setClock, 1000)


