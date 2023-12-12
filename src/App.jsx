import { useState } from 'react'
import './App.css'

const initialFriends = [
  {
    id: 118836,
    name: "Ali",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Maya",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Sami",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {

  return (
    <div className='sidebar'>
      <FriendsList />
    </div>
  )
}

export default App;

function FriendsList() {

  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) =>
        <li>
          <img src={friend.image}></img>
          <h3>{friend.name}</h3>
          {friend.balance < 0 && <p className='red'>You owe {friend.name} {Math.abs(friend.balance)} $</p>}
          {friend.balance > 0 && <p className='green'>{friend.name} owe you  {Math.abs(friend.balance)} $</p>}
          {friend.balance === 0 && <p> You and {friend.name} are even </p>}
        </li>)}
    </ul>
  )
}