import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ContactContainer() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        await axios({
          method: "get",
          url: "http://localhost:5000/api/contact/getAllContacts",
          // withCredentials: true,
        }).then((res) => {
          setContacts(res.data.contacts);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchContacts();
  }, []);
  return (
    <>
      {contacts.map((item) => (
        <div
          key={item.telephone}
          className=" w-full flex items-center justify-between bg-[var(--white)] px-12 py-2 shadow-md "
        >
          <p>{item.nom} </p>
          <p>{item.telephone}</p>
          <p>{item.email} </p>
          <p>{item.message} </p>
        </div>
      ))}
    </>
  );
}
