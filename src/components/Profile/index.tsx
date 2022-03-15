import React,{useState} from 'react';
import "./index.scss"
import $, { data } from "jquery";


const Profile = () => {
  const [data, setData] = useState(false);
  const men = "https://api.github.com/user"
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
                if (data.message == "Bad credentials") {
                    alert("wrong credentials")
                }
                else {
                   
                    return
                   
                }
                console.log(data)
        })
    })


})
  return (
    <form className="form">
      <div className="crop">
        <img
          src={`${data.avatar_url}`}
          alt='avatar'
        />
      </div>
      <h1 className="form">
        Profile
      </h1>
      Name
      <input
        id="name"
        name='name'
        placeholder='Name'


      />
      <textarea
        id='bio'
        name='bio'
        placeholder='Bio'
        rows={1}
      />
      <h6>You can @mention other users and organizations to link to them</h6>
      <input
        id='company'
        name='company'
        placeholder='Company'

      />
      <input
        id='location'
        name='location'
        placeholder='Location'

      />

      <input
        id='website'
        name='website'
        placeholder='Website'

      />
      <input
        id='img'
        name='img'
        placeholder='Photo'

      />
      <input
        id='profile'
        name='profile'
        placeholder='Profile'

      />
      <button onClick={() => console.log('send')} >
        Добавить
      </button>
    </form>
  );
};

export default Profile;