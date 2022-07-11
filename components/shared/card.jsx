function Card({ item, value, onClick }) {
  return (
    <div onClick={onClick} value={value}>{item}</div>
  )
}

export default Card