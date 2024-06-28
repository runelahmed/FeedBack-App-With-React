

const Button = ({children, type, isDisabled}) => {
  return (
    <button type={type} disabled={isDisabled} className={'btn btn-primary'} >{children}</button>
  )
}



export default Button
