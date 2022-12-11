import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "src/components/admin/NavBar";
import { loginStart } from "../../../store/auth/actions";
import { useRouter } from "next/router";
import { validateForm, validateProperty } from "src/helpers/validationHeper";
import { AuthSchema } from "../../../schema/authSchema";
const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [authInfo, setAuthInfo] = useState({});
  const [errors, setErrors] = useState([]);
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    if (auth.getData[0]?.status === "success") {
      router.push("/admin");
    }
    //console.log(auth, "auth")
  }, [auth]);

  const login = () => {
    console.log("hi", authInfo);
    dispatch(loginStart(authInfo));
  };

  const onChangeInput = (e) => {
    validateField(e.target.id, e.target.value)
    setAuthInfo({ ...authInfo, [e.target.id]: e.target.value });
  };

  const validateField = (name, value) => {
    const errMsg = validateProperty(name, value, AuthSchema)

    if(errMsg) {
      errors[name] = errMsg;
    } else {
      delete errors[name]
    }
  }

  return (
    <div className="min-h-full">
      <NavBar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-1xl font-bold tracking-tight text-gray-900">
            Login
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlhtmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                type="email"
                placeholder="Email"
                onChange={onChangeInput}
                value={authInfo.email}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlhtmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="password"
                type="password"
                placeholder="******************"
                onChange={onChangeInput}
                value={authInfo.password}
              />
              <p className="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="btn btn-primary gap-2 btn-sm"
                type="button"
                onClick={() => login()}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
