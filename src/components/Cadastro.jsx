import { useEffect } from "react";

function Cadastro(props) {

  useEffect(() => {
    props.setPagina('cadastro')
  }, []);

  return (
    <>
      <h1>Cadastro</h1>
    </>
  );
}

export default Cadastro;