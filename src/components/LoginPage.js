

function LoginPage({onLoggin}){
  

  const handleLoggingin = (isvalid) => {
    onLoggin(isvalid);
    console.log(isvalid);
  };

    return(
        <div>
          
        <div className="container-fluid">
          <div className="row">
          <nav className="col topbar">
            <img className="toplogo" src="assets/Logo.jpg"></img>
            <div className="user-profile">
              
            </div>
          </nav>
          </div>
      </div>

      <h2>Login</h2>
          <form>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required></input>
          <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required></input>
          </form>

        <div>
            <button onClick={() => {handleLoggingin(1)}}>Login</button>
        </div>


      </div>
    );
}

export default LoginPage;