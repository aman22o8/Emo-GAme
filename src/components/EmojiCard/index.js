// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachList, myClickemoji} = props
  const {id, emojiName, emojiUrl} = eachList
  //   console.log(id)
  const handlemyClick = () => {
    myClickemoji(id)
  }

  return (
    <li className="each_list_container">
      <button onClick={handlemyClick} type="button" className="btn_emoji">
        <img className="my_logo" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
