import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';
// it is about multipul returning

const MultipleReturns = () => {

  const [isloading, setIsLoading] = useState(false);
  const [isErorr, setIsError] = useState(true);
  const [user, setUser] = useState('default user');


  useEffect( () => {
    // another way of fetching
    fetch(url)
    // .then((resp) => resp.json())
    .then((resp) => {
      if (resp.status >= 200 && resp.status <= 299) {
        return resp.json();
      } else {
        setIsLoading(true);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    })
    // .then((user) => console.log(user))
    .then((user) => {
      const {login} = user;
      setUser(login)
      setIsLoading(false)
    })
    .catch(error => console.log(error));
}, []) // here it means useEffect runs only once

  if(isloading == true){
    // return '....loading'
    return (<div>
      <h1>Loading....</h1>
    </div>
  );
  }
  if (isErorr ==true){
    return (
    <div>
      <h1>Error....</h1>
    </div>
  )
  }
  return <div>
      <h1>{user}</h1>
    </div>

  // <h2>multiple returns</h2>;
};

export default MultipleReturns;
