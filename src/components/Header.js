const Header = ({ toggleTheme, theme }) => {
  return (
    <div className='header'>
      <h1>Where in the world</h1>
      <div className="toggle" onClick={toggleTheme}>
        {theme === 'dark' ? (
          <>
            <i className="fa-solid fa-sun"></i>
            <span> Light Mode</span>
          </>
        ) : (
          <>
            <i className="fa-solid fa-moon"></i>
            <span> Dark Mode</span>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
