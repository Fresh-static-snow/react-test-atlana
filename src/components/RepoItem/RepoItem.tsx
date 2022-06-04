import React, { FC } from "react";
import { IUserRepo } from "../../models/types";
import styles from "./RepoItem.module.scss";

interface IRepoItemProps {
  repository: IUserRepo;
}

const RepoItem: FC<IRepoItemProps> = ({ repository }) => {
  return (
    <div className={styles.container}>
      <a
        className={styles.wrapper}
        style={{ textDecoration: "none", color: "white" }}
        href={repository.html_url}
      >
        <div style={{ color: "rgb(108, 164, 248)" }}>{repository.name}</div>
        <div className={styles.stats}>
          <div>Stars: {repository.stargazers_count}</div>
          <div>Forks: {repository.forks_count}</div>
        </div>
      </a>
    </div>
  );
};

export default RepoItem;
