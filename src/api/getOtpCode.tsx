export const getOtpCode = async (phone: string) => {
  const responce = await fetch("https://shift-backend.onrender.com/auth/otp", {
    method: "Post",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ phone: phone }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
  return responce;
};
