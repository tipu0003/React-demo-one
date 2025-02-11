function Footer() {
    return (
      <footer className="bg-dark text-white py-3 mt-4">
        <div className="container text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Your Name | Built with React & Bootstrap
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;