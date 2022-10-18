import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'contactsStorage/contactsAPI';
import { Rings } from 'react-loader-spinner';
import { ContactsListItem } from './ContactsListItem';

import styles from './ContactsList.module.css';

export const ContactsList = () => {
  const { data: contacts, isLoading, isSuccess } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const getContacts = () => {
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const items = getContacts();
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Phone book</h2>
      <ul className={styles.list}>
        {isLoading && (
          <div className={styles.loader}>
            <Rings
              height="200"
              width="200"
              color="#0031f9"
              ariaLabel="loading"
            />
          </div>
        )}
        {isSuccess &&
          items.map(({ id, name, number }) => (
            <ContactsListItem key={id} id={id} name={name} number={number} />
          ))}
        {items && items.length === 0 && (
          <span className={styles.text}> Phone book is empty </span>
        )}
      </ul>
    </div>
  );
};
