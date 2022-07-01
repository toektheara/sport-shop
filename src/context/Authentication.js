import React, { useEffect, useState } from 'react';
import axios_instance from '../libs/axiosInstance';
import useAuthContext from './AuthContext';
import useMeContext from './MeContext';

const Authentication = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [me, setMe] = useMeContext();
  const [token, setToken] = useAuthContext();

  useEffect(() => {
    const access_token = localStorage.getItem('token');

    if (access_token) {
      axios_instance.get('/audience', {
        params: {
          remember_token: access_token
        }
      }).then((data) => {
        setToken(access_token)
        setMe(data.data)
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) return <>Loading</>

  return <>{props.children}</>
}

export default Authentication;