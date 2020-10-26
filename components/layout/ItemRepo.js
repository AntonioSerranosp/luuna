import React from 'react'

const ItemRepo = (Listitem) => {
       
    const {name, id, description, html_url, language} = Listitem.Listitem
    
    
    return (
        
            <div className=" col-8  justify-content-center card animate__fadeIn my-2 "  style={{ width: '18rem', background:'#51adcf'}}>
                    <div className="card-body justify-content-center" style={{ color:'white'}}>
                        <h2 className="card-title text-center">{name}</h2>
                        <p className="card-text text-center">{description}</p>
                        <p className="card-text text-center">lenguage: {language}</p>

                        <a href={`${html_url}`} className=" d-block btn btn-outline-light  btn-lg">See Repo page</a>
                    </div>
            </div>
    
    )
}

export  default ItemRepo 