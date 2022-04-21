// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here

const allContacts = document.getElementById("display_all_contacts")
const singleCard = document.getElementById("display_single_contact")

//load contacts

function createContacts() {
  for (const contact of contactsList) {
    newDiv = document.createElement('div')
    contPara = document.createElement('p')
    conName = contact.name
    conPhone = contact.phone
    conEmail = contact.email
    contPara.innerHTML = conName
    allContacts.appendChild(newDiv)
    newDiv.appendChild(contPara)
    newDiv.addEventListener('click', displayContact)
  }
}
createContacts()
  
//display single contact

function displayContact(evt) {
  contDiv = document.createElement('div')
  contInfo = document.createElement('p')
  contInfo.innerHTML = evt.target.innerHTML
  singleCard.appendChild(contDiv)
  contDiv.appendChild(contInfo)
}

//allContacts.addEventListener('click', displayContact)
