import "./App.css"


function App() {


  return (
    <>

      <nav class="navbar navbar-expand-lg fixed-top main-nav">
        <div class="container">
          <a class="navbar-brand text-white" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item " href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Parent Resources</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Career</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Blogs</a>
              </li>
              <button className="btn btn-md btn-contact">Contact Us</button>
            </ul>

          </div>
        </div>

      </nav>


    </>
  )
}

export default App
