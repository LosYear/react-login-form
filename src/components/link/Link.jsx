import "./styles.scss";

const Link = ({ className, children }) => (
  <a className={`link ${className}`} href="#">
    {children}
  </a>
);

export default Link;
