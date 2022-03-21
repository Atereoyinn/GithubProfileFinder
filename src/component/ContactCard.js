import React from "react";

const ContactCard = ({
  avatar_url,
  name,
  url,
  repos_url,
  organizations_url,
}) => {
  return (
    <>
      <div className="mainContainer">
        <div className="cardContainer">
          <img src={avatar_url} alt="Profile Avatar" />
          <h2>
            Name: <span>{name}</span>
          </h2>
          <h3>
            Website: <a href={url}>{url}</a>
          </h3>
          <h3>
            Repository-directory:<a href={repos_url}>{repos_url}</a>{" "}
          </h3>
          <h3>
            Organization:<a href={organizations_url}>{organizations_url}</a>
          </h3>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
