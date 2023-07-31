import "./Footer.scss";

export function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <a href="https://github.com/Talar25">
        <p>Copyright @ ${date} Talar25</p>
      </a>
    </footer>
  );
}
