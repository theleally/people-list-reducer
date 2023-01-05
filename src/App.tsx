import { usePeopleList } from "./reducers/peopleList";
import { useState, ChangeEvent } from "react";

const App = () => {
  const [inputName, setInputName] = useState("");
  const [list, dispatch] = usePeopleList();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleAddButton = () => {
    if (inputName) {
      dispatch({
        type: "ADD",
        payload: {
          name: inputName,
        },
      });
    }
    setInputName("");
  };

  const handleDeleteButton = (id: string) => {
    dispatch({
      type: "DEL",
      payload: { id },
    });
  };

  return (
    <div className="p-5">
      <input
        className="border-4 mb-2"
        type="text"
        value={inputName}
        onChange={handleInputChange}
      />
      <br />
      <button className="p-2 border m-2" onClick={handleAddButton}>
        Adicionar nome
      </button>
      <button
        className="p-2 border m-2"
        onClick={() => dispatch({ type: "ORDER" })}
      >
        Ordenar nomes
      </button>
      <hr />
      <h1 className="p-2">Lista de nomes:</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name} -{" "}
            <button onClick={() => handleDeleteButton(item.id)}>
              [Deletar]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
