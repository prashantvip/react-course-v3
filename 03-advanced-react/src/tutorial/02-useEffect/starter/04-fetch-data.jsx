import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';


const FetchData = () => {
  const [users, setUsers] = useState([])

  const getData = async () => {
    const response = await fetch(url)
    const users = await response.json()
    console.log(users);
    setUsers(users);
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
      {users.map((user) => {
        console.log(user);
        const { id, login, avatar_url, html_url } = user
        return (
          <div key={id}>
            <img src={avatar_url} alt={login} style={{ width: '5%', borderRadius: '25px' }} />
            <h2>{login}</h2>
            <a href={html_url}>profile</a>
          </div>
        )
      })}
    </div>
  );
};
export default FetchData;
