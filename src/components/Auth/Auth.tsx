import React from 'react';
import $ from "jquery";
import './Auth.scss'

const Auth = () => {
    $(document).ready(function () {
        $("#form").submit(function (event) {
            event.preventDefault()
            let username = $("#username").val()
            let password = $("#password").val()
    
            let headers = btoa(username + ":" + password);
    console.log(headers)
    
            fetch("https://api.github.com/user", {
                headers: {
                    'Authorization': 'token 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 '
                }
            })
                .then(function (data) {
                return data.json()
                })
                .then(function (data) {
                    $("#username").val("")
                    $("#password").val("")
                    if (data.message == "Bad credentials") {
                        alert("wrong credentials")
                    }
                    else {
                       
                        let result = `<img ml-4" width="100" height="100" src="${data.avatar_url}"/><br><h1>${data.login}</h1><br><a href="/about" element={Profile/}><button> LET'S GO </button></a>`
                        $("#result").html(result)
                       
                    }
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
          <input
            type="text"
            id="username"
            placeholder="username"
            required

          />
        </div>
        <div >
          <input
            type="password"
            id="password"
            placeholder="password"
            required
          />
        </div>  
    <div >
            <button >SignIn</button>
        </div>    
      </form>
      <div id="result"></div>
    </div>
    </>
    );
};

export default Auth;