function card({ item, value, onClick }) {
  return (
    <div onClick={onClick} value={value}>{item}</div>
  )
}

export default card