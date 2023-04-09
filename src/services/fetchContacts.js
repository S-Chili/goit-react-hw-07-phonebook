const BASE_URL = 'https://64330e7d3e05ff8b37343ad9.mockapi.io/contacts/:endpoint';

export const fetchContactsService = async () => {
  const data = await fetch(BASE_URL, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  return data.json();
};

export const addContactService = async contact => {
  const data = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(contact),
  });
  return data.json();
};

export const deleteContactService = async id => {
  const data = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return data.json();
};