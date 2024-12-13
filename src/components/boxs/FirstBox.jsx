import React from "react";

const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1153334/pexels-photo-1153334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "John Doe",
    email: "johndoe@example.com",
    amount: 2500,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "Jane Smith",
    email: "janesmith@example.com",
    amount: 3200,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "Michael Brown",
    email: "michaelbrown@example.com",
    amount: 1800,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "Emily Davis",
    email: "emilydavis@example.com",
    amount: 4100,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "Chris Wilson",
    email: "chriswilson@example.com",
    amount: 2750,
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "Sophia Martinez",
    email: "sophiamartinez@example.com",
    amount: 3000,
  }
];

const FirstBox = () => {
  return (
    <div className="First-Box">
      <h2>Top Deals</h2>
      <div className="top-users-list">
        {topDealUsers.map((user) => (
          <div className="topUser-item" key={user.id}>
            <div className="topUser-info-sec">
              <img
                src={user.img}
                alt={user.userName}
                className="topUser-info-img"
              />
              <div className="topUser-text">
                <p>{user.userName}</p>
                <span>{user.email}</span>
              </div>
            </div>
            <span className="topUser-amount-sec">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstBox;
