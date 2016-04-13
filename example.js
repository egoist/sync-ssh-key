const syncTo = require('./')

syncTo('egoist@kaga.egoistian.com')
  .then(() => {
    console.log('success')
  })
  .catch(e => console.log(e.stack))
