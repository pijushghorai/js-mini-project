// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "Pijush Ghorai",
    job: "Front-End Developer",
    img: "https://images.pexels.com/photos/20431931/pexels-photo-20431931/free-photo-of-man-wearing-traditional-gown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. ",
  },
];


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem)
})

function showPerson() {
    const item = reviews[currentItem]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function() {
    currentItem = currentItem + 1;
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)
})

prevBtn.addEventListener("click", function() {
    currentItem = currentItem - 1;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson()
})

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})