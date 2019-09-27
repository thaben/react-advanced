import React from "react";
import User from "./User";

const Card = ({ title }) => (
  <div>
    <h2 className="is-size-2">{title}</h2>
    <User>
      {(user) =>
        user && (
          <div className="card">
            <img src={user.imgPath} className="card-img-top" alt={`${user.name} photo.`} />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">JWT: {user.JWT}</h6>
              <p className="card-text">
                {user.username} | is admin: {user.admin ? "yes" : "no"}
              </p>
            </div>
          </div>
        )
      }
    </User>
  </div>
);

export default Card;
