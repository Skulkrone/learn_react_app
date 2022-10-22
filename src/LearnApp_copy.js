import { useState } from "react";
// import Item from "./Components/Item/Item";

function App() {
  // console.log(useState(10));
  // console.log("MISE A JOUR");

  // const [monState, setMonState] = useState(10);
  // console.log(setMonState);

  // const modifyState = (data) => {
  //   // console.log(data);
  //   // modifier state du composant parent avec le state du composant enfant
  //   setMonState(data)
  // }

  // **** Comment utiliser les inputs, comment changer le state ****
  // const [inputData, setInputData] = useState(10);

  // const changeInput = (e) => {
  //   // console.log(e);
  //   setInputData(e);
  // }

  // console.log(inputData);

  // Input ==> to waste data binding = lier notre state avec notre template/contenu
  // to waste car on le fait de 2 manières différentes :
  // -- avec value : de base, si déjà du state, ça va l'écrire dans l'input
  // -- et avec l'événement : si on écris dans l'input, ça maj le state

  // return (
  //   // JSX accepte :
  // -- expression mais pas de déclaration
  // -- des pseedos élémentes html (sucre syntaxique)
  //   <div className="App">
  //     {/* <h1>Hello state : {monState}</h1> */}

  //     {/* <button onClick={modifyState}>Change state</button> */}
  //     {/* <Item txt={"Hello World depuis App vers Item"}></Item>
  //     <Item txt={"Hello Italy"}></Item>
  //     <Item txt={"Hello Japan"}></Item> */}
  //     {/* <Item number={monState}></Item> */}
  //     {/* <Item func={modifyState}></Item> */}
  //     {/* <p>Lorem ipsum dolor sit amet.</p>
  //     <p>Lorem ipsum dolor sit amet.</p>
  //     {5 + 5}
  //     <br />
  //     <input type="text" />
  //     <br />
  //     <img src="" alt="" />
  //     {false ? 1000 : "abc"}     */}

  //     {/* CSS avec React */}

  //     {/* <h1>Hello depuis App</h1> */}
  //     {/* <Item></Item> */}

  //     {/* Comment utiliser les inputs, comment changer le state */}
  //     {/* <input
  //     type="text"
  //     value={inputData}
  //     onInput={e => changeInput(e.target.value)}
  //     /> */}

  //     {/* Rendu Conditionnel */}
  //     {toggleContenu}
  //     <button onClick={changeState}>Change state</button>
  //   </div>
  // );

  // return React.createElement(
  //   'div',
  //   {className: 'App'},
  //   React.createElement('h1', null, 'Hello app React')
  // );

  // ********************** Rendu Conditionnel *******************************

  // const [toggle, setToggle] = useState(true);
  // const changeState = () => {
  //   setToggle(!toggle);
  // };

  // Quand peu de contenu ou élément à changer, le mettre dans une variable
  // let toggleContenu;

  // if(toggle){
  //   toggleContenu = <h1>Le state est True</h1>;
  // } else {
  //   toggleContenu = <h1>Le state est False</h1>;
  // }

  // Quand bcp de contenu on utilise "if" :

  // if (toggle) {
  //   return (
  //     // JSX
  //     <div className="App">
  //       {/* Rendu Conditionnel */}
  //       {toggleContenu}
  //       <button onClick={changeState}>Change state</button>
  //     </div>
  //   );
  // } else if (toggle === false) {
  //   return (
  //     <div className="App">
  //       {/* Rendu Conditionnel */}
  //       {toggleContenu}
  //       <button onClick={changeState}>Change state</button>
  //     </div>
  //   );
  // }

  // *** Rendu Conditionnel avec opérateur ternaire ***

  // return (
  //   // JSX accepte :
  //   // -- expression mais pas de déclaration
  //   // -- des pseedos élémentes html (sucre syntaxique) qui se fait compiler en méthode par React ; compilé par Babel JS
  //   <div className="App">
  //     {/* Rendu Conditionnel */}
  //     {/* {toggleContenu} */}
  //     {/* Rendu Conditionnel avec opérateur ternaire */}
  //     {/* {toggle ? <h1>Le state est True</h1> : <h1>Le state est False</h1>} */}
  //     {/* Short-circuit operator = utlise qd on ne veut montrer qu'une seule chose*/}
  //     {/* {toggle && <h1>Le state est True</h1>} */}

  //     {/* Toggle de classe & de CSS */}
  //     <div className={toggle ? "box animated" : "box"}></div>
  //     {/* dans style = très peu utilisé */}
  //     {/* <div className="box" style={{backgroundColor: toggle ? "salmon" : "blue"}}></div> */}
  //     <button onClick={changeState}>Change state</button>
  //   </div>
  // );

  // ****************** Création Liste avec Tableau *******************************

  const [dataArr, setDataArr] = useState([
    { nom: "Juliette" },
    { nom: "John" },
    { nom: "Joris" },
  ]);

  return (
    <div className="App">
      {/* avec méthode map qui retourne nouveau tableau dans React, tjs mettre une key unique avec index sinon erreur */}
        {dataArr.map((item, index) => {
          return <p key={index}>Nom : {item.nom}</p>
        })}
    </div>
  );
}

export default App;
