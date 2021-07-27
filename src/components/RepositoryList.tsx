import { useState, useEffect } from 'react';
// useEffect disparar função quando algo acontecer (variável mudou) dispara uma ação no sistema

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [repositories])
  //não pode esquecer do segundo fator   }, [repositories]
  return (

    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })
          //o map retorna repositórios
        }

      </ul>
    </section>

  );
}