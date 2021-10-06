import { useCallback } from 'react';
import style from './index.module.scss';

function Comp(props) {
  const { onCancel } = props;
  const maskOnClick = useCallback(() => {
    if (typeof onCancel === 'function') {
      onCancel();
    };
  }, [onCancel]);
  return (
    <div className={style["wrapper"]}>
      <div className="mask" onClick={maskOnClick}></div>
      <div className="content"></div>
    </div>
  );
}

export default Comp;
