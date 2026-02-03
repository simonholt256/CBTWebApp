import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  const huntPage = () => {
    navigate("/hunt");
  }

  const catchPage = () => {
    navigate("/catch")
  }

  const lifestylePage = () => {
    navigate("/lifestyle")
  }

  return (
    <>
      <div>
        Home
        <button className="hunt-button" onClick={huntPage}>Hunting thoughts</button>
        <button className="catch-button" onClick={catchPage}>Catch a thought</button>
        <button className="lifestyle-button" onClick={lifestylePage}>Lifestyle</button>
      </div>
    </>
  )
}

export default Home