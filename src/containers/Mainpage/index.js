import style from './index.module.scss';

function Page() {
  return (
    <div className={style["wrapper"]}>
      <div className="header">{"Broccoli & Co."}</div>
      <div className="content"></div>
      <div className="footer">{"Broccoli & Co."}</div>
    </div>
  );
}

export default Page;
