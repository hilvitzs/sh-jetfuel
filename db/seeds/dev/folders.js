exports.seed = (knex, Promise) => {

  return knex('links').del()
    .then(() => knex('folders').del())
    .then(() => {
      return Promise.all([
        knex('folders').insert({
          name: 'iceland'
        }, 'id')
        .then(folder => {
          return Promise.all([
            knex('links').insert({
              id: 0,
              long_url: 'https://www.icelandprocruises.com/media/img/gallery/home/0002-gallery-iceland-waterfall-1.jpg',
              short_url: 'asdfjklm89',
              visits: 0,
              folder_id: folder[0]
            }),
          ])
        }),

        knex('folders').insert({
          name: 'grand canyon'
        }, 'id')
        .then(folder => {
          return Promise.all([
            knex('links').insert({
              id: 1,
              long_url: 'https://www.grandcanyonwest.com/files/3456/gcw-hp-canyonsunset.jpg',
              short_url: 'vnmw34f67k',
              visits: 0,
              folder_id: folder[0]
            })
          ])
        }),

        knex('folders').insert({
          name: 'new zealand'
        }, 'id')
        .then(folder => {
          return Promise.all([
            knex('links').insert({
              id: 2,
              long_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Emerald_Lakes%2C_New_Zealand.jpg/270px-Emerald_Lakes%2C_New_Zealand.jpg',
              short_url: 'qwiy65kl98b',
              visits: 0,
              folder_id: folder[0]
            })
          ])
        })
      .then(() => console.log('Seeding Complete'))
      .catch((error) => console.log(`Error seeding data: ${error}`))
    ])
  })
  .catch((error) => console.log(`Error seeding data: ${error}`))
};
