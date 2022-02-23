let stillDescr = document.getElementById('still-travel-h4')
let quizDescr = document.getElementById('code-quiz-h4')
let weatherDescr = document.getElementById('weather-dashboard-h4')

let stillAnchor = document.createElement('a')
let quizAnchor = document.createElement('a')
let weatherAnchor = document.createElement('a')

stillAnchor.href = 'https://github.com/b-e-christensen/travel-app'
stillAnchor.target = '_blank'
stillAnchor.textContent = ' Click here to view repository.'
stillAnchor.classList.add('white')

quizAnchor.href = 'https://github.com/b-e-christensen/code-quiz'
quizAnchor.target = '_blank'
quizAnchor.textContent = ' Click here to view repository.'
quizAnchor.classList.add('white')

weatherAnchor.href = 'https://github.com/b-e-christensen/weather-dashboard'
weatherAnchor.target = '_blank'
weatherAnchor.textContent = ' Click here to view repository.'
weatherAnchor.classList.add('white')

stillDescr.append(stillAnchor)
quizDescr.append(quizAnchor)
weatherDescr.append(weatherAnchor)
