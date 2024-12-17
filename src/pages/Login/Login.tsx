import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useState } from "react";
import { authLogin } from "../../redux/reducers/auth/auth.thunk";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const [form, setForm] = useState({ name: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      authLogin({
        name: form.name,
        token: "",
        expires: 0,
      })
    )
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
