import React from "react";

function ProfilSidebar() {
  return (
    <div className="p-sidebar">
      <p>Ici sera le sidebar du profil</p>
      <div className="row">
        <div className="col-md-12 col-sm-12 justify-content-center">
          <div className="list-group" id="list-tab" role="tablist">
            <a
              className="list-group-item list-group-item-action"
              id="list-home-list"
              data-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="home"
            >
              Profil
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-profile-list"
              data-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="profile"
            >
              Compte
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-messages-list"
              data-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="messages"
            >
              Badges
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-settings-list"
              data-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="settings"
            >
              Préférences
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilSidebar;
