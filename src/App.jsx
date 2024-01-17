import { useState } from "react";
import UserForm from "./components/Form/UserForm";
import UserList from "./components/List/UserList";

function App() {
  const [users, setUsers] = useState([
    { name: "Nihal", email: "nihal@gmail.com" },
    { name: "Selim", email: "selim@gmail.com" },
  ]);

  // function of adding the user
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="p-3 d-flex flex-column gap-5">
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
