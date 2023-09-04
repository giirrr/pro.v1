import { useState } from "react";
import { signup } from "../api";
import "../App.css";
const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    id: "",
    password: "",
    rePassword: "",
    companyPk: 1, // You may set the appropriate companyPk value here
    authNum: 0, // Initialize authNum with 0
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

  return (
    <div className="login-form-container">
      <h2>회원가입</h2>
      <h4>이미 회원이신가요?</h4>
      <a href="/">
        <h4 id="blue_name">여기서 로그인하기 !</h4>
      </a>

      <form method="post" onSubmit={handleSubmit} id="signup-form">
        <span className="login-subtitle">이메일</span>
        <input
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <span className="login-subtitle">사번</span>
        <input
          type="text"
          name="id"
          placeholder="사번을 입력해주세요"
          value={formData.id}
          onChange={handleChange}
          required
        />
        <span className="login-subtitle">비밀번호</span>
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <span className="login-subtitle">비밀번호 재확인</span>
        <input
          type="password"
          name="rePassword"
          placeholder="비밀번호를 다시 입력해주세요"
          value={formData.rePassword}
          onChange={handleChange}
          required
        />
        <span className="login-subtitle">인증 번호</span>
        <input
          type="text"
          name="authNum"
          placeholder="인증 번호를 입력해주세요"
          value={formData.authNum}
          onChange={handleChange}
          required
        />

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Signup;
