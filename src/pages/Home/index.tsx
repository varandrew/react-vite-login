import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [isLogin] = useLocalStorage('isLogin')
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogin) window.location.assign('https://www.lizhi.io')
    else navigate('/login')
  }, [isLogin])

  return (
    <>
      <div>home</div>
    </>
  )
}

export default Home
