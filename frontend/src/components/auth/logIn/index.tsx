import { useNavigate } from "react-router-dom";

const LogIndex: React.FC = () => {
  const navigate = useNavigate();

  const LogInForm = () => {
    navigate('login'); // Relative path, will navigate to /authform/login
  }

  return (
    <button onClick={LogInForm} className="border border-black px-6 py-2 rounded-xl bg-slate-400 text-white text-sm">
      Log In
    </button>
  )
}

export default LogIndex;
