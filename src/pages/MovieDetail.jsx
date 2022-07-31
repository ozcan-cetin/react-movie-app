import React, { useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState("")
  return (
    <div>
      <div className='card mb-3" style="max-width: 540px;'>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="" className="img-fluid rounded-start" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
