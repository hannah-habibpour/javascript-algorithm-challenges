function phoneNumberDirectory(contactsObj) {
  const contactMap = new Map();

  for (const contact of contactsObj) {
    const contactDetailArr = contact.split(":");
    contactMap.set(contactDetailArr[0], contactDetailArr[1]);
  }

  return contactMap;
}

module.exports = phoneNumberDirectory;
