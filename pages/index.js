import Head from 'next/head';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <Head>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      </Head>
      <div>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#5b7ab0'}}>
                <a className="navbar-brand">
                    <Link  href="/">Inicio</Link>   
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item active">
                                
                                <a className="nav-link" href="#">
                                    <Link  href="/repositories">Repositories</Link> 
                                </a>
                            </li>
                            <li className="nav-item active">
                                
                                <a className="nav-link" href="#">
                                    <Link  href="/user-search">Usuarios</Link>
                                </a>
                            </li>
                        
                        </ul>
                    </div>
            </nav>
            <div className="row justify-content-center my-5">
              <img src="./luuna.png" className="img-fluid" alt="Responsive image"/>
            </div>
            <div className="row justify-content-center my-2 ">
              <a href="#" className=" d-block btn btn-outline-primary  btn-lg ml-3">
              <Link  href="/repositories">Busca repositorios</Link>   
              
              </a>
              <a href="#" className=" d-block btn btn-outline-primary  btn-lg ml-3">
                <Link  href="/user-search">Busca usuarios</Link>   
              
              </a>
              
            </div>
            
      </div>
        
  </div>
      
    </div>
  )
}
