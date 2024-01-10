// Write your code here.
import './index.css'

const NavBar = props => {
  const {initialScore, totalScore, showCard} = props
  //   console.log(initialScore)
  const displayScore = showCard ? 'show' : ''

  return (
    <div className="header">
      <div className="logo_container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1 className="logo_heading">Emoji Game</h1>
      </div>
      <div className={`showmy_Score ${displayScore}`}>
        <p className="score_heading">Score: {initialScore}</p>
        <p className="score_heading">Top Score: {Math.max(...totalScore)}</p>
      </div>
    </div>
  )
}
//
export default NavBar
