import React, { useState, FormEvent } from 'react';
import "./index.scss"
import $ from "jquery"



const Profile = () => {
  $(document).ready(function () {
    $("#form").submit(function (event) {
      event.preventDefault()

      fetch("https://api.github.com/user", {
        headers: {
          'Authorization': 'token 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 '
        }
      })
        .then(function (data) {
          return data.json()
        })
        .then(function (data) {

          let result = `<img  class="img-thumbnail ml-4" width="100" height="100" src="${data.avatar_url}"/><h3>${data.name}</h3><h3>${data.bio}</h3><h3>${data.login}</h3><hr><h3>${data.company}</h3><a href="${data.html_url}">${data.html_url}</a><h3>${data.location}</h3><a target="_blank" href="${data.html_url}"><button class="btn btn-success">See Profile on  GITHUB </button></a>`
          $("#result").html(result)
          console.log(data)
        })
    })
  })
  return (
    <>
      <div>
        <h1>Github Authentication</h1>
        <div id="message"></div>
        <form id="form" autoComplete="off">
          <div >
            <button id="result">SEE PROFILE</button>
          </div>
        </form>
        <div id="result"></div>
      </div>
    </>
  );
};

export default Profile;