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
    const {myArray} = this.state
    if (myArray.includes(id)) {
      this.setState({showCard: true, myArray: [], initialScore: myArray.length})
    } else {
      if (emojisList.length - 1 === myArray.length) {
        this.setState(prevState => ({
          //   totalScore: [...prevState.totalScore, emojisList.length],
          initialScore: myArray.length,
          showCard: true,
          isWin: true,
        }))
      }
      this.setState(prevState => ({
        myArray: [...prevState.myArray, id],
        initialScore: prevState.initialScore + 1,
      }))
    }
  }

  playAgain = () => {
    const {initialScore} = this.state
    this.setState(prevState => ({
      totalScore: [...prevState.totalScore, initialScore],
      initialScore: 0,
      myArray: [],
      showCard: false,
      isWin: false,
    }))
  }

  render() {
    const {initialScore, totalScore, isWin, showCard, myArray} = this.state
    console.log(initialScore)
    console.log(totalScore)
    console.log(myArray)
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
