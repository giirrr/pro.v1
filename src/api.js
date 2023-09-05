import axios from "axios";

const API_BASE_URL = "http://52.79.81.200:8080"; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});
export const signup = async (userData) => {
  try {
    const response = await api.post("/v1/employee/signin", userData);

    if (response.status === 201) {
      // 성공 응답 처리
      return response.data;
    } else {
      console.log("couponcoupupon");
      console.log("couponco");
      // 실패 응답 처리햐
      throw new Error("서버 응답 오류(쿠폰브렌치)");
    }
  } catch (error) {
    // 에러 응답 처리
    if (error.response) {
      const responseData = error.response.data;
      if (error.response.status === 400) {
        // Bad Request 처리
        if (responseData.message === "올바른 형식의 이메일 주소여야 합니다") {
          throw new Error("올바른 형식의 이메일 주소여야 합니다");
        } else if (
          responseData.message === "password and rePassword are not same"
        ) {
          throw new Error("password와 rePassword는 일치해야 합니다");
        } else if (responseData.message === "Not Match authNum") {
          throw new Error("authNum이 일치하지 않습니다");
        }
      } else if (error.response.status === 404) {
        // Not Found 처리
        if (responseData.message === "Company not found") {
          throw new Error("회사가 존재하지 않습니다");
        } else if (responseData.message === "Authorization Number not found") {
          throw new Error("인증 번호를 받지 않았습니다");
        }
      } else if (error.response.status === 500) {
        // Internal Server Error 처리
        if (
          responseData.message ===
          "could not execute statement; SQL [n/a]; constraint [employee.UK_fopic1oh5oln2khj8eat6ino0]; nested exception is org.hibernate.exception.ConstraintViolationException: could not execute statement"
        ) {
          throw new Error("중복된 이메일입니다");
        }
      }
    } else {
      throw new Error("서버 응답 없음");
    }
  }
};
