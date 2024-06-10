import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changeData]=useState(
        [
            {
                "name":"jisna",
                "rollNo":1,
                "admNo":101,
                "college":"fisat"
            },
            {
                "name":"jinitha",
                "rollNo":2,
                "admNo":102,
                "college":"fisat"
            },
            {
                "name":"Raifa",
                "rollNo":3,
                "admNo":103,
                "college":"fisat"
            }
        ]
    )
    
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div className="card">
                                        <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.name}</h5>
                                            <p className="card-text">RollNo : {value.rollNo}</p>
                                            <p className="card-text">Admno : {value.admNo}</p>
                                            <p className="card-text">College : {value.college}</p>
                                            <a href="#" class="btn btn-primary">Go for more</a>
                                        </div>
                                    </div> 
                                    </div>
                                }
                            )}
                            
                            
                            
                            
                        </div>
                            
                        
            
            </div>
            </div>
        </div>
        </div>




    )
}

export default ViewAll