import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = ({url, descricao, titulo, changeTitulo, changeUrl, changeDescricao}) => {

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Título:
          <Input id="titulo" onChange={changeTitulo} value={titulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={changeUrl} value={url}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={changeDescricao} value={descricao}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro