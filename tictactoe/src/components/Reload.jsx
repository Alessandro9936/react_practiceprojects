import classes from "./styles/Reload.module.css";
import { Overlay } from "./Overlay";

export const Reload = ({ closeReload }) => {
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <>
      <Overlay />
      <div className={classes.modal}>
        <h3>RESTART GAME?</h3>

        <div className={classes.options}>
          <button className={classes.back} onClick={closeReload}>
            NO, CANCEL
          </button>
          <button className={classes.next} onClick={handleRestart}>
            YES, RESTART
          </button>
        </div>
      </div>
    </>
  );
};
