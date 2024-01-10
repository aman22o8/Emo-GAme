/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard/index'
import NavBar from '../NavBar/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {
    myArray: [],
    initialScore: 0,
    totalScore: [0],
    showCard: false,
    isWin: false,
  }

  myClickemoji = id => {
    const {emojisList} = this.props
    emojisList.sort(() => Math.random() - 0.5)
    const {myArray, initialScore} = this.state
    if (myArray.includes(id)) {
      this.setState({showCard: true, initialScore: myArray.length})
    } else {
      if (initialScore !== 11) {
        this.setState(prevState => ({
          myArray: [...prevState.myArray, id],
          initialScore: prevState.initialScore + 1,
        }))
      }
      this.setState(prevState => ({
        myArray: [...prevState.myArray, id],
        initialScore: prevState.initialScore + 1,
        showCard: true,
        isWin: true,
      }))
    }
  }

  playAgain = () => {
    const {initialScore} = this.state
    this.setState(prevState => ({
      totalScore: [...prevState.totalScore, initialScore],
      initialScore: 0,
      showCard: false,
      isWin: false,
    }))
  }

  render() {
    const {initialScore, totalScore, isWin, showCard} = this.state
    console.log(totalScore)
    const {emojisList} = this.props

    return (
      <div className="main_container">
        <NavBar
          showCard={showCard}
          totalScore={totalScore}
          initialScore={initialScore}
        />

        <div className="footer">
          {showCard ? (
            <WinOrLoseCard
              playAgain={this.playAgain}
              initialScore={initialScore}
              isWin={isWin}
            />
          ) : (
            <ul className="emoji_list">
              {emojisList.map(each => (
                <EmojiCard
                  myClickemoji={this.myClickemoji}
                  key={each.id}
                  eachList={each}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
