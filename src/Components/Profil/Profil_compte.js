import React from "react";

function ProfilCompte() {
  return (
    <div>
      <p>Changer mon mot de passe :</p>
      <form className="form-group">
        <div className="form-item">
          <div className="form-input active">
            <label htmlFor="profile-name">Nouveau mot de passe</label>
            <input
              type="text"
              id="profile-name"
              name="profile_name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-item">
          <div className="form-input active">
            <label htmlFor="profile-name">Nouveau mot de passe</label>
            <input
              type="text"
              id="profile-name"
              name="profile_name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-item">
          <div className="form-input active d-flex inline">
            <label htmlFor="profile-name">Désactiver mon compte</label>
            <input
              type="checkbox"
              id="profile-name"
              name="profile_name"
              className="form-control"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfilCompte;
