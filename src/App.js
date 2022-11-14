import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
   //Input Controlado
  // passo 1 - criar um estado para cada input
  // passo 2 - onChange - funções e eventos
  // passo 3 - chamar o estado no value
  const [url, setUrl] = useState("")
  const [descricao, setDescricao] = useState("")
  const [titulo, setTitulo] = useState("")

  function changeUrl(event) {
    setUrl(event.target.value)
  }
  function changeDescricao(event) {
    setDescricao(event.target.value)
  }
  function changeTitulo(event) {
    setTitulo(event.target.value)
  }
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro 
          changeUrl={changeUrl} 
          changeDescricao={changeDescricao} 
          changeTitulo={changeTitulo}
          url={url} 
          descricao={descricao}
          titulo={titulo}
          />
        </aside>
        <TelaDaPostagem 
          url={url} 
          descricao={descricao}
          titulo={titulo}
            />
      </Container>
    </>
  );
}

export default App;
