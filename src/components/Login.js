import { useState } from "react";
import { signup } from "../api";
import "../App.css";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userPassword: "",
    authNum: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      // Handle success, e.g., redirect to a success page or show a success message
      console.log("Signup successful:", response);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Signup failed:", error);
    }
  };
  console.log(tntntnwjd);

  return (
    <div className="login-form-container">
      {/* ... (your HTML structure) */}

      <h2>로그인</h2>
      <h4>아직 회원이 아니신가요?</h4>
      <a href="index.html">
        <h4 id="blue_name">회원가입 하러가기 !</h4>
      </a>

      <form method="get" onSubmit={handleSubmit} id="login-form">
        <span class="login-subtitle">User Number</span>
        <img src="img/user 1.svg" class="user_icon" />
        <input
          type="text"
          name="userName"
          placeholder="사원번호 입력하기"
          required
        />
        <span class="login-subtitle">Password</span>
        <img src="img/padlock 1.svg" class="padlock_icon" />
        <input
          type="password"
          name="userPassword"
          placeholder="비밀번호 입력하기"
          required
        />
        <div class="remember-container">
          <div class="label-box">
            <label for="remember-check">
              <input type="checkbox" id="remember-check" />
              다음에도 기억하기
            </label>
          </div>
          <div class="remember-ask">
            <a href="rememberpassword.html">
              <span class="forgot_password">비밀번호를 잊으셨나요?</span>
            </a>
          </div>
        </div>
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};

export default Login;
