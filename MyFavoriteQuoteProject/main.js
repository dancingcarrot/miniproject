// local quotes data
const quotes = [
    {
      id: 1,
      name: 'Richard Branson',
      job: 'business person(Virgin Group CEO)',
      img: '/imges/Richard Branson.jpg',
      text: "screw it, just do it",
    },
    {
      id: 2,
      name: ' Wilmot Reed Hastings Jr.',
      job: 'business person(netflix ceo)',
      img: './imges/Reed Hastings.jpg',
      text: "Most entrepreneurial ideas will sound crazy, stupid and uneconomic, and then they'll turn out to be right.",
    },
    {
      id: 3,
      name: 'Jeff Bezos',
      job: 'business person(amazon founder)',
      img: './imges/Jeff Bezos.jpeg',
      text: 'People who are right most of the time are people who change their minds often.',
    },
    {
      id: 4,
      name: 'Jack Ma',
      job: 'business person (Alibaba founder)',
      img: './imges/Jack-Ma.jpg',
      text: 'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.',
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = quotes[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > quotes.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = quotes.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * quotes.length);
    showPerson(currentItem);
  });