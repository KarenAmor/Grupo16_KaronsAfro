import React from "react";

function categories(props) {
    return (
        <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Categorías</h5>
                        </div>
        {props.categ.map((category,index)=>{
            return <div className="card-body" >
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                        <div className="card-body" key={category+index}>
                            {category.categoria}: {category.cantidad}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        })}
        
        </div>
        </div>
    )
}

export default categories;