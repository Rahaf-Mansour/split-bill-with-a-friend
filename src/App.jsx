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
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleAddFiend() {
    setShowAddFriend((curr) => !curr);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleAddFiend}> {showAddFriend ? "Close" : "Add Friend"}</Button>
      </div>
      <FormSplitBill />
    </div>
  )
}

export default App;

function FriendsList() {

  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) =>
        <Friend key={friend.id} friend={friend} />)}
    </ul>
  )
}

function Friend({ friend }) {

  return (
    <>
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && <p className='red'>You owe {friend.name} {Math.abs(friend.balance)} $</p>}
        {friend.balance > 0 && <p className='green'>{friend.name} owe you {Math.abs(friend.balance)} $</p>}
        {friend.balance === 0 && <p> You and {friend.name} are even </p>}
        <Button>Select</Button>
      </li>
    </>
  )
}

function FormAddFriend() {

  return (
    <>
      <form className='form-add-friend'>
        <label>👬 Friend name</label>
        <input type="text" />
        <label>🌄 Image URL </label>
        <input type="text" />
        <Button>Add</Button>
      </form>
    </>
  )
}

function FormSplitBill() {

  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🧍‍♂️ Your expense</label>
      <input type="text" />
      <label>👬 X expense</label>
      <input type="text" />
      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="you">You</option>
        <option value="x">X</option>
      </select>
    </form>
  )
}

function Button({ children, onClick }) {

  return (
    <button className='button' onClick={onClick}>{children}</button>
  )
}

