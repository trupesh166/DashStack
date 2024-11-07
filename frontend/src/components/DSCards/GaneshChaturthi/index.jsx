import React, { useState } from 'react';
import style from './GaneshChaturthi.module.css';
import { MoreOutlined } from '@ant-design/icons';

const data = [
  {
    id: 1,
    title: 'Ganesh Chaturthi',
    amount_per_member: 300,
    phone: '99130 52221',
    age: 22,
    gender: 'male',
    description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa.',
  },
  {
    id: 2,
    title: 'Navratri',
    amount_per_member: 300,
    phone: '99130 52221',
    age: 22,
    gender: 'male',
    description: 'Navratri is a festival dedicated to the worship of the Hindu deity Durga.',
  },
  {
    id: 3,
    title: 'Ganesh Chaturthi',
    amount_per_member: 300,
    phone: '99130 52221',
    age: 22,
    gender: 'male',
    description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa.',
  },
];

const GaneshChaturthiCard = () => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    if (openMenuId === id) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(id);
    }
  };

  return (
    <div className={style.ganeshChaturthi}>
      {data.map((item) => (
        <div className={style.ganeshChaturthiCard} key={item.id}>
          <div className={style.cardTitle}>
            <p>{item.title}</p>
            <button onClick={() => toggleMenu(item.id)}>
              <MoreOutlined />
            </button>
            {openMenuId === item.id && (
              <div className={style.menu}>
                <ul>
                  <li>Edit</li>
                  <li>View</li>
                  <li>Delete</li>
                </ul>
              </div>
            )}
          </div>
          <div className={style.cardDetails}>
            <div>
              <p>Amount Per Member</p>
              <span>{item.amount_per_member}.00</span>
            </div>
            <div>
              <p>Phone Number</p>
              <span>+91 {item.phone}</span>
            </div>
            <div>
              <p>Age</p>
              <span>{item.age}</span>
            </div>
            <div>
              <p>Gender</p>
              <span>{item.gender}</span>
            </div>
            <div className={style.description}>
              <p>Description</p>
              <div>
                <span>{item.description}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GaneshChaturthiCard;
