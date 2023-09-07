const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <strong>Ticketless </strong>by{" "}
        <a href="https://serverlesslab.com">Serverlesslab</a>. A sample
        application for learning Serverless on AWS.
      </p>
      <p>
        The <a href="https://github.com/lucpod/ticketless">source code</a> is
        licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
        website content is licensed{" "}
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY NC SA 4.0
        </a>
        .
      </p>
      <p>
        <a href="http://bulma.io" target="_blank">
          <small>
            Made with <strong>bulma</strong>
          </small>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
