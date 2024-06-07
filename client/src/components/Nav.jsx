const Nav = () => {
  return (
    <nav className="flex justify-around h-20 items-center">
        <div>
          <img src="" alt="Logo" />
        </div>
        <div className="flex gap-20">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Reviews</a>
        </div>
        <div className="flex gap-5">
          <a href="">Login</a>
          <a href="">Signup</a>
        </div>
    </nav>
  )
}

export default Nav