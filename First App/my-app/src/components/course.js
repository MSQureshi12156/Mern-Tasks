import React from 'react';

const Course = () => {
  return (
    <>
    <section class="bg-white">
      <div class="container">
        <div class="row course-line">
              <div class="course col-md-4">
                <span class="icon-shape">
                  <i class="fas fa-video" aria-hidden="true"></i>
                </span>
                <h4 class="course-heading">30,000 online courses</h4>
                <p class="course para">Enjoy a variety of fresh topics</p>
              </div>  
              <div class="course col-md-4">
                <span class="icon-shape">
                  <i class="fas fa-solid fa-users" aria-hidden="true"></i>
                </span>
                <h4 class="course-heading">30,000 online courses</h4>
                <p class="course para">Enjoy a variety of fresh topics</p>
              </div> 
              <div class="course col-md-4">
                <span class="icon-shape">
                  <i class="fas fa-solid fa-clock" aria-hidden="true"></i>
                </span>
                <h4 class="course-heading">30,000 online courses</h4>
                <p class="course para">Enjoy a variety of fresh topics</p>
              </div> 
                      
        </div>
      </div>
      </section>
    
    </>
  );
}

export default Course;