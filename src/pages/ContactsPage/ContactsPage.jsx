import { ContactForm } from 'components/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { ContactsFilter } from 'components/ContactsFilter';

export default function ContactsPage() {
  return (
    <>
      <ContactForm />
      <ContactsFilter />
      <ContactsList />
    </>
  );
}
