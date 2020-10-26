import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {useForm} from '../hooks/useForm';
import ItemUsuario from '../components/layout/Itemusuario';


const Usuarios = () => {

    const [ searchValue, handleSearchInputChange ] = useForm( { searchText: '' } );
    const [listItems, setListItems] = useState([]);
    const [cargando, setCargando] = useState(false)
    const {searchText } = searchValue;
    let query = searchText;
    
    const handleSearch = ( event ) =>{
        event.preventDefault();
       fetchUsers();
    }
    useEffect(() => {
        if(listItems.length == 0){
            setCargando(true);
        }else{
            setCargando(false);
        }
    }, [listItems])
    const fetchUsers = async () =>{
        const urlUser = `https://api.github.com/search/users?q=${query}`
        const resp  =  await fetch(urlUser);
        const { total_count, items } = await resp.json();
        setListItems(items)
    }
    


  return (
    <div>
      <Head>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      </Head>
      <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#5b7ab0', color:'#ffffff'}}>
                <a className="navbar-brand" >
                    <Link  href="/">Inicio</Link>   
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            
                            <a className="nav-link" href="#" style={{color:'#ffffff'}}>
                                <Link  href="/repositories">Repositories</Link> 
                            </a>
                        </li>
                        <li className="nav-item active">
                            
                            <a className="nav-link" href="#" style={{color:'#ffffff'}}>
                                <Link  href="/user-search">Usuarios</Link>
                            </a>
                        </li>
                    
                    </ul>
                    <form 
                        onSubmit={ handleSearch }
                        className="form-inline my-2 my-lg-0">
                        <input 
                            name="searchText"
                            value={searchText}
                            onChange={handleSearchInputChange}
                            autoComplete="off"
                            className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
      <div className="row justify-content-center my-4">
                { 
                    (cargando) 
                             && 
                                <div className="alert alert-info my-4 animate__fadeInLeft">
                                    Usuarios de Github por su nombre
                                </div>
                }
                {
                    listItems.map(Listitem =>(
                       <ItemUsuario key={Listitem.id} Listitem={Listitem}/> 
                    
                    ))
                }
      </div>
      
    </div>
  )
}

export default Usuarios
