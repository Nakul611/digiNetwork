import { Link } from 'react-router-dom';

interface InputUserIdFormProps {
    link: string;
}

const InputUserIdForm: React.FC<InputUserIdFormProps> = ({ link }) => {
  return (
    <div className='flex justify-center items-center'>
        <div>
            User Name: <input type="text" />
        </div>
        <div>
            Password: <input type="password"/>
        </div>
        <div>
            <Link to={link}>
              <button>Add</button>
            </Link>
        </div>
    </div>
  )
}

export default InputUserIdForm;
