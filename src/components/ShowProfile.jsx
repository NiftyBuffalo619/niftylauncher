import React from 'react'

export default function ShowProfile({ username: username , profile_picture: profile_picture }) {
  return (
    <>
      <h1>{username}</h1>
      <img src={profile_picture} />
    </>
  )
}
