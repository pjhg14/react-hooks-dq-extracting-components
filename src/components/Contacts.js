import Contact from "./Contact"
// import { contacts } from "../data";

function Contacts({ contacts }) {
    const contactList = contacts.map(contact => {
        return(
            <Contact key={contact.id} name={contact.name}/>
        )
    })

    return(
        <nav>
            <h2>Contacts</h2>
            <ul className="contacts">
                {contactList}
            </ul>
        </nav>
    )
}

export default Contacts