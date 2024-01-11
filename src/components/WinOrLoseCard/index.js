// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWin, initialScore, playAgain} = props
  //   console.log(isWin)
  const imageWinLose = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const handleplayAgain = () => {
    playAgain()
  }
  return (
    <div className="result_container">
      <img className="loose_img" src={imageWinLose} alt="win or lose" />
      <div className="bottom_left">
        <h1 className="result_heading">{isWin ? 'You Won' : 'You Lose'}</h1>
        {isWin ? (
          <p className="your_score">Best Score</p>
        ) : (
          <p className="your_score">Score</p>
        )}

        <p className="your_result">{initialScore}/12</p>
        <button onClick={handleplayAgain} type="button" className="mybtn">
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
