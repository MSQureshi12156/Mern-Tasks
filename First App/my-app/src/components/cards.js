import React from 'react';

const Cards = () => {
  return (
    <>
<div className='container'>
    <div className='row' style={{display: "flex"}}>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card-wrapper">
        <div className="card" style={{width: "18rem"}}>
            <img src="assets/images/course-laravel.jpg" className="card-img-top" alt="Dummy Image"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    </div>
</div>
</div>
</div>
</div>
</div>
    
    </>
  );
}

export default Cards;