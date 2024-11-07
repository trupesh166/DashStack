import React, { useState } from 'react'
import style from "./MaintenanceCard.module.css"

const MaintenanceCard = () => {

  const [status, setStatus] = useState(false)

  return (
    <div className={style.maintenanceCard}>
      <div className={style.cardTitle}>
        <p>Maintenance</p>
        <button>{status ? "Success" : "Panding"}</button>
      </div>
      <div className={style.cardDetails}>
        <div className={style.cardBox}>
          <div className={style.cardContent}>
            <div className={style.billDetails}>
              <div className={style.billDate}>
                <div>
                  <p>Bill Date</p>
                  <span>11/04/2024</span>
                </div>
                <div>
                  <p>Pending Date</p>
                  <span>11/04/2024</span>
                </div>
              </div>
              <hr />
              <div className={style.billAmount}>
                <div>
                  <p>Maintanance Amount</p>
                  <span>{1000}.00</span>
                </div>
                <div>
                  <p>Maintenance Penalty Amount</p>
                  <span>{250}.00</span>
                </div>
              </div>
            </div>
            <div className={style.billTotal}>
              <p>Grand Total</p>
              <span>{1250}.00</span>
            </div>
          </div>
          <div className={style.paymentButton}>
            <button onClick={() => setStatus(!status)}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaintenanceCard
