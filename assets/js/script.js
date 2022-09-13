let proj1Descr = document.getElementById('proj-1-h4')
let proj2Descr = document.getElementById('proj-2-h4')
let proj3Descr = document.getElementById('proj-3-h4')


let stillAnchor = document.createElement('a')
let budgettlyAnchor = document.createElement('a')
let hamletAnchor = document.createElement('a')

stillAnchor.href = 'https://github.com/b-e-christensen/lore-keeper-python'
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

proj2Descr.append(stillAnchor)
proj3Descr.append(budgettlyAnchor)
proj1Descr.append(hamletAnchor)
