function Card({ children, value, onClick, className }) {
  return (
    <div className={className} onClick={onClick} value={value}>{children}</div>
  )
}

export default Card