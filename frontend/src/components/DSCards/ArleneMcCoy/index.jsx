import React from 'react'
import style from "./ArleneMcCoy.module.css"

const data = [
  {
    id: 1,
    title: "Arlene McCoy",
    email: "arlenemccoy@gmail.com",
    phone: "99130 52221",
    age: 22,
    gender: "Male",
    relation: "Brother"
  },
  {
    id: 2,
    title: "Arlene McCoy",
    email: "arlenemccoy@gmail.com",
    phone: "99130 52221",
    age: 22,
    gender: "Male",
    relation: "Brother"
  },
  {
    id: 3,
    title: "Arlene McCoy",
    email: "arlenemccoy@gmail.com",
    phone: "99130 52221",
    age: 22,
    gender: "Male",
    relation: "Brother"
  }
]

const ArleneMcCoyCard = () => {
  return (
    <div className={style.arleneMcCoy}>
      {
        data.map((item) => (
          <div className={style.arleneMcCoyCard} key={item.id}>
            <div className={style.cardTitle}>
              <p>{item.title}</p>
            </div>
            <div className={style.cardDetails}>
              <div>
                <p>Email</p>
                <span>{item.email}</span>
              </div>
              <div>
                <p>Phone Number</p>
                <span>+91{item.phone}</span>
              </div>
              <div>
                <p>Age</p>
                <span>{item.age}</span>
              </div>
              <div>
                <p>Gender</p>
                <span>{item.gender}</span>
              </div>
              <div>
                <p>Relation</p>
                <span>{item.relation}</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ArleneMcCoyCard
