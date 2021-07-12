import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";
import Title from "../../components/Title";

export default function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    if (repositoriesName != null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history.push("/");
    }
  }, [history]);

  return (
    <S.Container>
      <Title text="Repositórios" />
      <S.LinkHome to="/">Voltar</S.LinkHome>
      <S.List>
        {repositories.map((repository) => {
          return <S.ListItem>{repository}</S.ListItem>;
        })}
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  );
}
