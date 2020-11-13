const Experience = () =>{
  return (
    <main className = "experienceMain">
    <img src={require(`../images/downtown.jpg`).default} className = "backgroundImage"/>
      <div className="blurCard">
      <h2><strong>Past Experience</strong></h2>
      <ul>
        <li>
        <h3>
          <img
            src={require(`../images/logos/frbsfLogo.png`).default}
            alt="Federal Bank"
            class="logo"
            id="rbsfLogo"
          />
          Federal Reserved Bank of San Francisco
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae iusto
          saepe nemo excepturi magni fuga quidem labore a recusandae eius in
          commodi sed porro placeat iure accusamus, voluptatum itaque totam quos
          fugit consequuntur sunt dicta! Tempore earum, ab cupiditate a
          repellendus recusandae voluptatem aspernatur eaque, rerum sed voluptas
          necessitatibus libero quae. Dolores quae illum veniam dignissimos
          quisquam ipsam quis sapiente consectetur aspernatur cupiditate
          eligendi, sunt neque, aliquid at facere nemo nostrum corrupti incidunt
          laboriosam velit iure! Deleniti adipisci optio cupiditate, enim
          voluptates corrupti deserunt? Perferendis doloribus sit quibusdam
          repellendus sunt. Amet sit dolores ipsum perspiciatis illo nihil
          deleniti quo dolorum.
        </p>
        </li>
        <li>
        <h3>
          <img src={require(`../images/logos/wellsLogo.png`).default} alt="Wells Fargo"
            class="logo"
            id="wellsLogo" />
          Wells Fargo
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil
          optio quae eaque beatae eveniet, possimus voluptates officia neque
          corrupti! Consequatur repellendus, voluptatibus saepe id odit neque
          ipsa laboriosam possimus molestias minus error beatae pariatur
          cupiditate ipsum. Laboriosam veniam voluptates minus incidunt deleniti
          doloribus provident, soluta expedita at impedit modi ipsam aliquid
          fuga aliquam, veritatis repudiandae. Quod ex quae accusantium minima
          vitae, magnam alias suscipit earum magni incidunt voluptatibus
          perspiciatis.
        </p>
        </li>
      </ul> 
      </div>
    </main>
  );
}
export default Experience