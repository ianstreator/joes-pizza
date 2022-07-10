function menu_item({children, value, onClick}) {
  return (
    <div value={value} onClick={onClick}>{children}</div>
  )
}

export default menu_item