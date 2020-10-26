import React, {useEffect} from 'react';
import Link from 'next/link';
import {useForm} from '../../hooks/useForm';


const Navbar = () => {
//    const [searchValue, setSearch] = useState('')
    const [ searchValue, handleSearchInputChange ] = useForm( { searchText: '' } );

    

    const {searchText } = searchValue;
    let query = searchText;
    
    
    
    
    

    const handleSearch = ( event ) =>{
        event.preventDefault();
       //console.log(searchText);
       fetchUsers();

       //fetchRepositories();
       
    }
   
    const fetchRepositories = async() =>{
        
        console.log(`Este es el query: ${query}`);
        const url = `https://api.github.com/search/repositories?q=${query}`
        const resp  =  await fetch(url);
        const { total_count, items } = await resp.json();
        console.log(total_count);
        console.log( items );
        
    }

    
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                                user-search
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
    )
}

export default Navbar;
