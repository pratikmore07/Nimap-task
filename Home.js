
const Home=()=>
{
return(
    <section className="main">

        <nav className="navbar navbar-expand-lg fixed-top " id='header'>
            <div className="container-fluid row py-3 ">
                <div className="col-12 col-md-4 text-center">
                    <h1 className="display-3 text-light">MovieDB</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="col-12 col-md-5 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item " id="bar">
                            <a className="nav-link fs-4 mx-2 " aria-current="page" to="/Home">Populer</a>
                        </li>
                        <li className="nav-item " id="bar">
                            <a className="nav-link fs-4 mx-2 " to="/Plans">Top Rated</a >
                        </li>
                        <li className="nav-item " id="bar">
                            <a className="nav-link fs-4 mx-2 " to="/Story">Upcoming</a >
                        </li>
                    </ul>
                </div>
                <form className="col-12 col-md-3 d-flex" role="search">
                    <input class="form-control w-50 border-1 border-dark" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>

    </section>
);

}
export default Home;