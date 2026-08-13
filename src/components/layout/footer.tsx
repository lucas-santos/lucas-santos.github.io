import Link from "next/link";

import "@/styles/layout/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        &copy; {new Date().getFullYear()}{" "}
        <Link className="footer-link" href="https://github.com/lucas-santos">
          Lucas Santos
        </Link>
      </div>
      <div className="footer-links">
        <Link
          className="footer-link"
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS
        </Link>
        <Link className="footer-link" href="/terms">
          Terms
        </Link>
        <Link
          className="footer-link"
          href="https://github.com/1chooo/vcard"
          target="_blank"
          rel="noopener noreferrer"
        >
          Template by 1chooo
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
export { Footer };
