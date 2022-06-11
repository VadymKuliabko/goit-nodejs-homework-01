const { Command } = require("commander");
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
    case "remove":
      const removeContactById = await contacts.removeContact(id);
      console.log(removeContactById);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAktion(argv);
