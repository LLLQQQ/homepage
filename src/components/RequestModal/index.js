import { useCallback, useState } from 'react';
import style from './index.module.scss';

function Comp(props) {
  const { onCancel } = props;
  const [requestDone, setRequestDone] = useState(false);
  const cancelOnClick = useCallback(() => {
    if (typeof onCancel === 'function') {
      onCancel();
    };
  }, [onCancel]);
  const sendOnClick = useCallback(() => {
    setRequestDone(true);
  }, []);
  return (
    <div className={style["wrapper"]}>
      <div className="mask" onClick={cancelOnClick}></div>
      {
        requestDone ? (
          <div className="content done">
            <div className="title">All done!</div>
            <div className="content">You will be one of the first to experience<br />{"Broccoli & Co."} when we launch.</div>
            <div className="btn" onClick={cancelOnClick}>OK</div>
          </div>
        ) : (
          <div className="content">
            <div className="title">Request an invite</div>
            <input className="input" placeholder="Full name" />
            <input className="input" placeholder="Email" />
            <input className="input" placeholder="Confirm email" />
            <div className="btn" onClick={sendOnClick}>Send</div>
          </div >
        )
      }
    </div >
  );
}

export default Comp;
