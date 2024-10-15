import { useEffect, useState } from "react";
import { userAuthorization } from "../../api/userAuthorization";
import { getOtpCode } from "../../api/getOtpCode";
import styles from "./AuthForm.module.css";

export interface AuthFormProps {
  login: (otpCode: string) => void;
}

const AuthForm = ({ login }: AuthFormProps) => {
  const [phone, setPhone] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [isOtpCode, setIsOtpCode] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isTimer, setIsTimer] = useState(false);

  const phoneHandler = (e: { target: { value: string } }) => {
    setPhone(e.target.value);
  };

  const optCodeHandler = (e: { target: { value: string } }) => {
    setOtpCode(e.target.value);
  };

  const responceHandler = (responce: Boolean) => {
    if (responce) {
      setIsOtpCode(true);
      setIsTimer(true);
      setSeconds(60);
    } else {
      setIsOtpCode(false);
    }
  };

  const authorization = async () => {
    const responce = await userAuthorization(phone, otpCode);

    if (responce.success) {
      login(responce.token);
    }
  };

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(timer);
    } else if (isTimer) {
      setIsTimer(false);
    }
  }, [seconds]);

  return (
    <div className={styles.authorization}>
      <div className={styles.content}>
        <h2 className={styles.title}>Вход</h2>
        <p className={styles.description}>
          Введите номер телефона для входа в личный кабинет
        </p>
        <input
          onChange={(e) => {
            phoneHandler(e);
          }}
          placeholder="Телефон"
          value={phone}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        {isOtpCode && (
          <input
            onChange={(e) => {
              optCodeHandler(e);
            }}
            placeholder="Проверочный код"
            type="text"
            value={otpCode}
          />
        )}
        <button
          onClick={() => {
            isOtpCode
              ? otpCode.length < 6
                ? alert("Код должен содержать 6 цифр")
                : authorization()
              : phone == ""
              ? alert("Заполните номер телефона!")
              : getOtpCode(phone).then((responce) => {
                  responceHandler(responce.success);
                });
          }}
        >
          {isOtpCode ? "Войти" : "Продолжить"}
        </button>
        {isOtpCode && (
          <p
            className={isTimer ? styles.timerText : styles.resendingText}
            onClick={() => {
              !isTimer &&
                getOtpCode(phone).then((responce) => {
                  responceHandler(responce.success);
                });
            }}
          >
            {isTimer
              ? `Запросить код повторно можно через ${seconds} секунд`
              : "Запросить код еще раз"}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
