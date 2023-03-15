import React, {useEffect} from 'react';

function Menu({ title, menuObject, discoverObject, collectionObject, }) {
   

    useEffect(() => {
      const allLi = document
        .querySelector(".menuContainer")
        .querySelectorAll("li");

      function changeMenuActive() {
        this.classList.add("active");
        allLi.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
      }

      allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
    }, []);

  return (
    <div className="menuContainer">
      <div>
        <ul>
          {menuObject &&
            menuObject.map((menu) => (
              <li key={menu.id}>
                {" "}
                <a href="https://nowhere.xyz">
                  <i>{menu.icon}</i>
                  <span>{menu.name}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>

      <div className='discoverContainer'>
        <p>Discover</p>

        <ul>
          {discoverObject &&
            discoverObject.map((discover) => (
              <li key={discover.id}>
                {" "}
                <a href="https://nowhere.xyz">
                  <i>{discover.icon}</i>
                  <span>{discover.name}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>

      <div className='collectionContainer'>
        <p>Collectioin</p>

        <ul>
          {collectionObject &&
            collectionObject.map((collection) => (
              <li key={collection.id}>
                {" "}
                <a href="https://nowhere.xyz">
                  <i>{collection.icon}</i>
                  <span>{collection.name}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export { Menu };