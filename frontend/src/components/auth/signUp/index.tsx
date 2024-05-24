import { useNavigate } from "react-router-dom";

const SignIndex: React.FC = () => {
  const navigate = useNavigate();

  const SignUpForm = () => {
    navigate('signup'); // Relative path, will navigate to /authform/signup
  }

  return (
    <button onClick={SignUpForm} className="border border-black px-6 py-2 rounded-xl bg-slate-400 text-white text-sm">
      Sign Up
    </button>
  )
}

export default SignIndex;
