import "./styles.scss";

const Link = ({ className, children }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a className={`link ${className}`} href="#">
    {children}
  </a>
);

export default Link;
