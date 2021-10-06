import { useCallback, useState } from 'react';
import style from './index.module.scss';
import RequestModal from '../../components/RequestModal';

function Page() {
  const [visible, setVisible] = useState(false);
  const inviteOnClick = useCallback(() => {
    setVisible(true);
  }, []);
  const modalOnCancel = useCallback(() => {
    setVisible(false);
  }, []);
  return (
    <div className={style["wrapper"]}>
      <div className="header">{"Broccoli & Co."}</div>
      <div className="content">
        <div className="title">A better way<br />to enjoy every day.</div>
        <div className="subtitle">Be the first to know when we launch.</div>
        <div className="btn" onClick={inviteOnClick}>Request an invite</div>
      </div>
      <div className="footer">Made with ♥ in Melbourne.<br />© 2016 {"Broccoli & Co."} All rights reserved.</div>
      {
        visible && (
          <RequestModal
            onCancel={modalOnCancel}
          />
        )
      }
    </div>
  );
}

export default Page;
