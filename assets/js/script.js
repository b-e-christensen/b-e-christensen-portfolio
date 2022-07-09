let stillDescr = document.getElementById('still-travel-h4')
let budgettlyDescr = document.getElementById('budgettly-h4')
let hamletDescr = document.getElementById('hamlet-h4')

let stillAnchor = document.createElement('a')
let budgettlyAnchor = document.createElement('a')
let hamletAnchor = document.createElement('a')

stillAnchor.href = 'https://github.com/b-e-christensen/mvc-tech-blog'
stillAnchor.target = '_blank'
stillAnchor.textContent = ' Click here to view repository.'
stillAnchor.classList.add('white')

budgettlyAnchor.href = 'https://github.com/b-e-christensen/budget-tracking-app'
budgettlyAnchor.target = '_blank'
budgettlyAnchor.textContent = ' Click here to view repository.'
budgettlyAnchor.classList.add('white')

hamletAnchor.href = 'https://github.com/b-e-christensen/goals-to-do'
hamletAnchor.target = '_blank'
hamletAnchor.textContent = ' Click here to view repository.'
hamletAnchor.classList.add('white')

stillDescr.append(stillAnchor)
budgettlyDescr.append(budgettlyAnchor)
hamletDescr.append(hamletAnchor)
