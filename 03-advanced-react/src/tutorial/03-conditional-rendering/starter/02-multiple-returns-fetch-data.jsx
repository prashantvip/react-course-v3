import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null)


  useEffect(() => {
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
    getData()
  }, [])


  if (isLoading) {
    return <h2>loading...</h2>
  }

  if (isError) {
    return <h3>Error...</h3>
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
    </div>
  );
};
export default MultipleReturnsFetchData;
