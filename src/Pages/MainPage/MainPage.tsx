import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.context}>
        <h1>Токен у меня!</h1>
        <h2>Я прошла в ШИФТ ЛАБ?</h2>
      </div>
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
