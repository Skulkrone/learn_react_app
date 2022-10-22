import { useState } from "react";
import './Item.css';
import autumn from '../../assets/autumn.jpg';
// import Cat from './catHeart.svg';
import {ReactComponent as Cat} from './catHeart.svg';

// function Item(props) {
//   // props est un objet qui contient ce qu'un parent lui donne
//   // console.log(props);
//   // console.log("MISE A JOUR");
//   // return (
//   //   <div>
//   //     <h2>{props.txt}</h2>
//   //     <h3>{props.number}</h3>
//   //   </div>
//   // )

//   const [itemState, setItemState] = useState("Item State!");

//   return (
//     <div>
//       <h1>{props.number}</h1>
//       {/* () => props.func(itemState) Fonction anonyme qui ne s'exécute que qd on va cliquer dessus --- on a remonté de l'enfant au parent*/}
//       <button onClick={() => props.func(itemState)}>Change state</button>
//     </div>
//   );
// }


// ça va servir à toggle du css avec on/off, faire des animations, intéractions, faire apparaitre des éléments -> style en inline
// const toggle = true; 
// const styleCSS = {color: toggle ? "crimson" : "green", fontSize: "50px"};

function Item() {

  const myletter = "g";
  // avec photo dans dossier public, on peut jouer, créer des variables dynamiques pour les images par exemple
  // si pas de passge par api ou backen, mettre les images dans sous-dossier "images" dans public

  return (
    <div>
      {/* <h1 style={styleCSS}>Hello depuis Item</h1> */}
      <h1 class="titre-item">Hello depuis Item</h1>
      <img src={autumn} alt="image automne" />
      <img src={process.env.PUBLIC_URL + `./images/imgPhoto.jp${myletter}`} alt="" />
      {/* <img src={Cat} alt="" /> */}
      <Cat></Cat>
    </div>
  )
}

export default Item;
