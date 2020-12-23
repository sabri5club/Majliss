import React from "react";
import "./Profil.css";
import ProfilSidebar from "./Profil_Sidebar";

export default function Profil() {
  return (
    <>
      <div className="container container-profil">
        <p>Profil en cours de construction ...</p>

        <div className="row  justify-content-center">
          <div className="col-md-3 col-sm-12 d-flex ">
            <ProfilSidebar />
          </div>
          <div className="col-md-8 col-sm-12  ">
            <div className="widget-box-p1 d-flex justify-content-center">
              <form className="form-group">
                <div className="form-item">
                  <div className="form-input active">
                    <label htmlFor="profile-name">Nom</label>
                    <input
                      type="text"
                      id="profile-name"
                      name="profile_name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-item">
                  <div className="form-input  active">
                    <label htmlFor="profile-tagline">Tagline</label>
                    <input
                      type="text"
                      id="profile-tagline"
                      name="profile_tagline"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-item">
                  <div className="form-input  full">
                    <textarea
                      id="profile-description"
                      name="profile_description"
                      placeholder="Ecrivez une courte description à propos de vous"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                <div className="form-item">
                  <div className="form-input small active">
                    <label htmlFor="profile-public-email">Votre Email</label>
                    <input
                      type="text"
                      id="profile-public-email"
                      name="profile_public_email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-item">
                  <div className="form-input small">
                    <label htmlFor="profile-public-website">
                      Site internet
                    </label>
                    <input
                      type="text"
                      id="profile-public-website"
                      name="profile_public_website"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-item">
                  <div className="form-select">
                    <label htmlFor="profile-country">Pays</label>
                    <select
                      id="profile-country"
                      name="profile_country"
                      className="form-control"
                    >
                      <option value="0">Choisir un PAYS</option>
                      <option value="1">France</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <button className="btn btn-primary" type="">
            Sauvegarder
          </button>
        </div>
      </div>
    </>
  );
}
