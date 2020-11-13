const HomeSection = () => {
  return (
    <section className="homeSection">
      <div className="blurCard">
          <img className="profilePicture" src={require(`../images/profilePicture.jpg`).default} alt="Bryan Romero"/>
        <div className= "cardText">
          <h2>Who is Bryan Romero</h2>
          <p>My name is Bryan Romero, I am a Software Engineer with a background in Bank Operations. I hope to use my ability to adapt and meet tight deadlines to immediately make an impact on a team. I am experienced in technologies such as React, Express, Django, MongoDB and PostgreSQL. Being that new technology is always around the corner, I will continue to use my adapt to learn as much as I can. </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
