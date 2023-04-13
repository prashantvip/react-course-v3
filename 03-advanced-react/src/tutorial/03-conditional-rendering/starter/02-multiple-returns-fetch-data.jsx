import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setUser(result);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData()
  }, [])


  if (isLoading) {
    return <h2>loading...</h2>
  }

  if (isError) {
    return <h3>Error...</h3>
  }
  const { avatar_url, login, name, bio } = user
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{name}</h2>
      <h4>{bio}</h4>
    </div>
  );
};
export default MultipleReturnsFetchData;
