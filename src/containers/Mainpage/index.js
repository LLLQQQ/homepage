import style from './index.module.scss';

function Page() {
  return (
    <div className={style["wrapper"]}>
      <div className="header">{"Broccoli & Co."}</div>
      <div className="content"></div>
      <div className="footer">Made with ❤ in Melbourne.<br />© 2016 {"Broccoli & Co."} All rights reserved.</div>
    </div>
  );
}

export default Page;
