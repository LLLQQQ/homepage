import { useCallback, useState } from 'react';
import style from './index.module.scss';
import axios from 'axios';

function Comp(props) {
  const { onCancel } = props;
  const [requestDone, setRequestDone] = useState(false);
  const [validInfo, setValidInfo] = useState(null);
  const [name, setName] = useState("");
  const nameOnChange = useCallback((e) => {
    const v = e.target.value ?? "";
    setName(v);
    if (validInfo?.name === true) {
      const { name, ...rest } = validInfo;
      setValidInfo(rest);
    };
  }, [validInfo]);
  const [email, setEmail] = useState("");
  const emailOnChange = useCallback((e) => {
    const v = e.target.value ?? "";
    setEmail(v);
    if (validInfo?.email === true) {
      const { email, ...rest } = validInfo;
      setValidInfo(rest);
    };
  }, [validInfo]);
  const [confirmEmail, setConfirmEmail] = useState("");
  const confirmEmailOnChange = useCallback((e) => {
    const v = e.target.value ?? "";
    setConfirmEmail(v);
    if (validInfo?.confirmEmail === true) {
      const { confirmEmail, ...rest } = validInfo;
      setValidInfo(rest);
    };
  }, [validInfo]);
  const cancelOnClick = useCallback(() => {
    if (typeof onCancel === 'function') {
      onCancel();
    };
  }, [onCancel]);
  const [loading, setLoading] = useState(false);
  const sendOnClick = useCallback(() => {
    // check format
    let n_valid_info = null;
    if (typeof name !== 'string' || name.length < 3) {
      n_valid_info = Object.assign({}, n_valid_info ?? {}, {
        name: true,
      });
    };
    if (typeof email !== 'string' || !/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(email)) {
      n_valid_info = Object.assign({}, n_valid_info ?? {}, {
        email: true,
      });
    } else {
      if (email !== confirmEmail) {
        n_valid_info = Object.assign({}, n_valid_info ?? {}, {
          confirmEmail: true,
        });
      };
    };
    if (!!n_valid_info) {
      setValidInfo(n_valid_info);
      return;
    };
    // correct
    setValidInfo(null);
    // send info
    setLoading(true);
    axios
      .post("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth", {
        name,
        email,
      })
      .then(retData => {
        console.log(retData);
        if (retData?.status === 200) {

          setRequestDone(true);

        } else if (retData?.status === 400) { };
      })
      .catch(err => { })
      .finally(() => {
        setLoading(false);
      });

  }, [name, email, confirmEmail]);
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
            <input className={"input" + (validInfo?.name === true ? " invalid" : "")} placeholder="Full name" value={name} onChange={nameOnChange} />
            <input className={"input" + (validInfo?.email === true ? " invalid" : "")} placeholder="Email" value={email} onChange={emailOnChange} />
            <input className={"input" + (validInfo?.confirmEmail === true ? " invalid" : "")} placeholder="Confirm email" value={confirmEmail} onChange={confirmEmailOnChange} />
            {
              loading ? (
                <div className="btn disable">Sending, please wait...</div>
              ) : (
                <div className="btn" onClick={sendOnClick}>Send</div>
              )
            }
          </div >
        )
      }
    </div >
  );
}

export default Comp;
