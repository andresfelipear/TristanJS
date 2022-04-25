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

//function for clean the content of the div display_single_contact
function closeSingleContact(){
  const singleContact = document.getElementById('display_single_contact')
  singleContact.innerHTML = '';
}


//function for get the attribute of the contact clicked and add those to the div display_single_contact
function displayOneContact(id) {
  const singleContact = document.getElementById('display_single_contact')
  singleContact.innerHTML = '';
  const contact = contactsList.find(contact => contact.ID == id)
  const contentContact = document.createElement('div');
  contentContact.setAttribute('id','individual_contact')
  contentContact.innerHTML = `
    <img src="img/${contact.image}" />
    <div>
        <h1>${contact.name}</h1>
        <p>${contact.phone}</p>
        <p>${contact.email}</p>
    </div>
    <div id="closeButton">
      <span class="fa-solid fa-circle-xmark"></span>
    </div>
    
  `
  singleContact.insertAdjacentElement('beforeend', contentContact)
  const closeButton = document.getElementById('closeButton')
  closeButton.addEventListener('click', closeSingleContact)

}


//function for create a div tag inside the display_all_contacts with img and name
function loadOneContact(contact) {
  const allContacts = document.getElementById('display_all_contacts')
  const contentContact = document.createElement('div');
  contentContact.setAttribute('id', contact.ID)
  contentContact.innerHTML = `<img src="img/${contact.image}" />
  <span>${contact.name}</span>`
  allContacts.insertAdjacentElement('beforeend', contentContact)
}

//function for create all the contacts
function loadAllContacts(contacts) {
  contacts.forEach(contact => {
    loadOneContact(contact)
  });
}

loadAllContacts(contactsList)

//event listener for create and open details single contact
const allContacts = document.getElementById('display_all_contacts')
allContacts.addEventListener('click', (event) => {
  let target = event.target.closest('div')
  displayOneContact(target.id)
})



