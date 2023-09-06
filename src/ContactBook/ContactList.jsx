// Задача 1: Создать приложение "Контактная книга", которое позволяет
// пользователю добавлять и просматривать контакты.
// 1)Создайте компонент ContactList, который отображает список контактов.
// 2)Создайте компонент AddContactForm, который позволяет пользователю
// добавлять новый контакт.
// Для каждого контакта добавляется имя, телефон и email.

import React from "react";

function ContactList({ list }) {
  console.log(list);
  return (
    <div>
      {list.map(({ id, name, email, phone }) => (
        <div key={id}>
          <span>{name}</span>
          <span>{email}</span>
          <span>{phone}</span>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
