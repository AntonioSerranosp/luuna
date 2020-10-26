import React from 'react'

const ItemUsuario = (Listitem) => {
    
    const {login, id, avatar_url, html_url} = Listitem.Listitem
    console.log(login, id, avatar_url, html_url);
    
    
    
    return (
            
            <div className=" col-4 card animate__fadeIn  my-3"  style={{ width: '20vw', paddingLeft: '5px'}}>
                <img src={ `${avatar_url}` } className="card-img-top" alt="user-photo"/>
                    <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                        <a href={`${html_url}`} className="btn btn-primary">See Github page</a>
                    </div>
            </div>
    
    )
}

export  default ItemUsuario 