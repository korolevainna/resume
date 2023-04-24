// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: `Ivan`,
    lastname: `Ivanov`,
 },
 position: `Junior Fullstack JS Developer`,
 salary: `600 $ в месяц`,
 address: `Gorishni Plavni. Ukraine 222`,
}

var footer = {
  social: {
    email: {
      text: `dmytro@mail.com`,
      href: `mailto:dmytro@mail.com`,
    },
    phone: {
      text:`+380670000123`,
      href: `tel:+380670000123`
    },
    linkedIn: {
      href: `https://www.linkedin.com/in/dmytro-test`,
      text: `LinkedIn`,
    },
  }, 
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {  
     title: `Resume | Summary`,
    },

    header,

    maine: {
      summary: {
        title: `Summary`,
        text: ` Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
     },

     experience: {
        title: `Other experience`,
        text: ` Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
     },
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills',{
    // ↙ сюди вводимо JSON дані

    page: {  
     title: `Resume | Skills`,
    },

    header,

    maine: {
      skills: [
        {
          name: `HTML`, 
          point: 10,
          isTop: true,
        },
        {
          name: `Git`, 
          point: 10,
          isTop: true,
        },
        {
          name: `Handelebars`, 
          point: 9,
          isTop: false,
        },
        {
          name: `VS code`, 
          point: 10,
        },
        {
          name: `Terminal`, 
          point: 8,
        },
        {
          name: `PHP`, 
          point: null,
        },
      ],
    },

    footer,  
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {  
     title: `Resume | Education`,
    },

    header,

    main: {
     education: [
      `det sad`,
      `Школа 3`,
      `Skull 6`,
      `Універ`,
      'Універ 2',
     ],
     certificates: {
       name: `Diplom `,
       id: [ `1999`, `2014`, 
      ],
     },
    },

    footer,  
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work',{
    // ↙ сюди вводимо JSON дані

    layout: `big`,

    page: {  
     title: `Resume | Work`,
    },

    header,

    maine: {
     works: [{
      position: `Surveing`,
      company: {
        name: `Poltava Mining`,
        url: `https://www.ferrexpo.ua/`,
      },
      duration: {
        from: `17.06.2021`,
        to: null,
      },
     projectAmount: 3,

     projects: [{
        name: `Resume`,
        url: `https://resume.com.ua/`,
        about: `Surveing god`,
        steks: [
          {
            name: `KMine`,
        },
       {
            name: `Surpak`,
      }, 
      {
            name: `Didgitals`,
      },
      ],
        awards: [
        {
          name: `Profecionale`,
        },
        {
          name: `Profecionale +`,
        },
      ],
      starkAmount: 2,
      awardAmount: 4,
      }],
     },
    ],
    },

    footer,  
  })
})


// Підключаємо роутер до бек-енду
module.exports = router
