let stillDescr = document.getElementById('still-travel-h4')
let budgettlyDescr = document.getElementById('budgettly-h4')
let blogDescr = document.getElementById('mvc-blog-h4')

let stillAnchor = document.createElement('a')
let budgettlyAnchor = document.createElement('a')
let mvcAnchor = document.createElement('a')

stillAnchor.href = 'https://github.com/b-e-christensen/travel-app'
stillAnchor.target = '_blank'
stillAnchor.textContent = ' Click here to view repository.'
stillAnchor.classList.add('white')

budgettlyAnchor.href = 'https://github.com/b-e-christensen/budget-tracking-app'
budgettlyAnchor.target = '_blank'
budgettlyAnchor.textContent = ' Click here to view repository.'
budgettlyAnchor.classList.add('white')

mvcAnchor.href = 'https://github.com/b-e-christensen/mvc-tech-blog'
mvcAnchor.target = '_blank'
mvcAnchor.textContent = ' Click here to view repository.'
mvcAnchor.classList.add('white')

stillDescr.append(stillAnchor)
budgettlyDescr.append(budgettlyAnchor)
blogDescr.append(mvcAnchor)
