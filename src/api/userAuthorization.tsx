export const userAuthorization = async (phone: string, otpCode: string) => {
  const responce = await fetch(
    "https://shift-backend.onrender.com/users/signin",
    {
      method: "Post",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ phone: phone, code: otpCode }),
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log(error.message));

  return responce;
};
