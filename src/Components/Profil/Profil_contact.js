import React from "react";

function ProfilContact() {
  return (
    <>
      <div class="row">
        <div class="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
          <h1 class="section-title">Nous contacter</h1>
        </div>
      </div>

      <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
        <form
          class="shake"
          role="form"
          method="post"
          id="contactForm"
          name="contact-form"
          data-toggle="validator"
        >
          <div class="form-group label-floating">
            <label class="control-label" for="name">
              Votre nom
            </label>
            <input
              class="form-control"
              id="name"
              type="text"
              name="name"
              required
              data-error="Please enter your name"
            />

            <div class="form-group label-floating">
              <label class="control-label" for="email">
                Votre email
              </label>
              <input
                class="form-control"
                id="email"
                type="email"
                name="email"
                required
                data-error="Please enter your Email"
              />

              <div class="form-group label-floating">
                <label class="control-label">Sujet</label>
                <input
                  class="form-control"
                  id="msg_subject"
                  type="text"
                  name="subject"
                  required
                  data-error="Please enter your message subject"
                />
              </div>
              <div class="form-group label-floating">
                <label for="message" class="control-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  id="message"
                  name="message"
                  required
                  data-error="Write your message"
                ></textarea>
                <div class="help-block with-errors"></div>
              </div>

              <div class="form-submit mt-5">
                <button class="btn btn-primary" type="submit" id="form-submit">
                  <i class="material-icons mdi mdi-message-outline"></i>
                  Envoyer
                </button>
                <div id="msgSubmit" class="h3 text-center hidden"></div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfilContact;
