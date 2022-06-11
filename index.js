console.clear();
const contacts = require("./contacts");

const invokeAktion = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const result = await contacts.listContacts();
      console.log(result);
      break;
    case "get":
      const getContact = await contacts.getContactById(id);
      console.log(getContact);
      break;
    case "add":
      const addNewContact = await contacts.addContact(name, email, phone);
      console.log(addNewContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

//invokeAktion({ action: "list" });
//invokeAktion({ action: "get", id: "4" });
invokeAktion({
  action: "add",
  name: "Mango",
  email: "mango@gmail.com",
  phone: "322-22-22",
});
