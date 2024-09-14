import { ChangeEventHandler, useState } from "react";
import { KeyIcon, UserIcon, EmailIcon, SearchIcon } from '../icons/input-ui-icons'

const InputIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'search': return <SearchIcon />
    case 'email': return <EmailIcon />
    case 'username': return <UserIcon />
    case 'password': return <KeyIcon />
    default: return null
  }
}

const InputUi = ({ type, position, id, onClick, onChange, ...props }: { type: string, position?: string, id?: string, onClick?: any, onChange?: ChangeEventHandler<HTMLInputElement> }) => {

  const [inType, setInType] = useState(type)

  const changeIcon = (e: any) => {
    if (onClick) onClick(e)
    if (type === 'password') {
      setInType(inType === 'password' ? 'text' : "password")
    }
  }

  return (
    <label className="input input-bordered flex items-center gap-2">
      {position === 'left' && <div onClick={(e) => changeIcon(e)}><InputIcon type={type} /></div>}
      <input type={inType === 'password' ? 'password' : "text"} title={id} id={id} className="grow" placeholder={type} onChange={onChange} {...props} />
      {position === 'right' && <div onClick={(e) => changeIcon(e)}><InputIcon type={type} /></div>}
    </label>
  );
}

export default InputUi;
