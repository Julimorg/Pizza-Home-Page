import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const pizzaData = [
  {
    name: "Focacia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoUrl: "./public/assets/pizzas/focaccia.jpeg",
    soldOut: false,
  },
  {
    name: "dqdqqq",
    ingredients: "eqqeq with italian olive oil and rosemary",
    price: 10,
    photoUrl: "./public/assets/pizzas/focaccia.jpeg",
    soldOut: false,
  },
  {
    name: "Focacia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 3,
    photoUrl: "./public/assets/pizzas/focaccia.jpeg",
    soldOut: false,
  },
  {
    name: "Focadqwdqwdqcia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 41,
    photoUrl: "./public/assets/pizzas/focaccia.jpeg",
    soldOut: false,
  },
  {
    name: "Focaawaegaia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 315,
    photoUrl: "./public/assets/pizzas/focaccia.jpeg",
    soldOut: false,
  },
  {
    name: "asdaewvq",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 12,
    photoUrl: "./public/assets/pizzas/focaccia.jpeg",
    soldOut: false,
  },
  {
    name: "dqwd",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 41,
    photoUrl: "./public/assets/pizzas/focaccia.jpeg",
    soldOut: true,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//? Sử dụng Prop để truyền dữ liệu Component cha cho component con
function Pizza({pizzaObj}) {
  return (
    <li className = {`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoUrl} alt={pizzaObj.name} />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <p>{pizzaObj.price}</p>
      <p>{pizzaObj.soldOut ? "Sold Out" : "Available"}</p>
      <div className="pizzas">
      </div>
    </li>
  );
}

function Header() {
  return (
    <>
      <header className="header">
        <h1>Fast React Pizza co.</h1>
      </header>
    </>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        {numPizzas > 0 ? (
          <>
          <p>
            Authentic Italian cuisine. 6 createive dishes to choose fro,. All from our stone oven, all organinc, all delicious
          </p>
            <ul className = "pizzas">
            {pizzas.map( (pizza) => (
              <Pizza pizzaObj = {pizza} key = {pizza.name}/>
            ))}
          </ul>
          </>
        ) :  (
          <p>We're still working on our menu. Please comeback later</p>
      )}
        {/* <Pizza
          photoUrl="./public/assets/pizzas/pizza2.jpeg"
          photoName="Pizzas"
          name="dqdqqq"
          ingredients="eqqeq with italian olive oil and rosemary"
          price = {10}
        />
        <Pizza
          photoUrl="./public/assets/pizzas/pizza2.jpeg"
          photoName="Pizzas"
          name="dqdqqq"
          ingredients="eqqeq with italian olive oil and rosemary"
          price = {10}
        />
        <Pizza
          photoUrl="./public/assets/pizzas/pizza2.jpeg"
          photoName="Pizzas"
          name="dqdqqq"
          ingredients="eqqeq with italian olive oil and rosemary"
          price = {10}
        /> */}
      </main>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = openHour >= hour && hour <= closeHour;

  // if ( openHour >= hour && hour <= closeHour)
  // {
  //     alert("We'r currently open!");
  // }else{
  //     alert("Sorry we're closed");
  // }
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.{" "}
      {isOpen ? (
        <div className="order">
          <p>
            We'r open until until {closeHour}:00. Come visit us or order
            online
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          Sorry we're closed. We're open from {openHour}:00 until {closeHour}:00.
        </p>
      )
      }
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
