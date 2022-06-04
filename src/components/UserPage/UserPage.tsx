import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { userAPI } from "../../services/UserService";
import RepoItem from "../RepoItem/RepoItem";
import styles from "./UserPage.module.scss";

const UserPage: FC = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const {
    data: reposData,
    isError: isReposError,
    isLoading: isReposLoading,
  } = userAPI.useGetAllUserReposQuery(username);
  const { data, isError, isLoading } = userAPI.useGetUserDataQuery(username);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filtredRepos = [...(reposData ?? [])].filter((repo) =>
    repo.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => navigate("/")}>
        Go back
      </button>
      {isError && <div>Server error...</div>}
      {isLoading && <div>Loading data...</div>}
      {username && (
        <div className={""}>
          <div className={styles.userdata}>
            <img src={data?.avatar_url} className={styles.avatar} />
            <div className={styles.info}>
              <div>Username: {username}</div>
              <div>{data?.email}</div>
              <div>{data?.location}</div>
              <div>Join: {data?.created_at}</div>
              <div>Followers: {data?.followers}</div>
              <div>Following: {data?.following}</div>
              <div>Public repositories:{data?.public_repos}</div>
            </div>
          </div>
          <div className={styles.bio}>{data?.bio}</div>
        </div>
      )}
      <input
        placeholder="search... "
        type={"text"}
        value={searchValue}
        onChange={onChangeSearch}
        className={styles.search}
      />
      {isReposError && <div>Server error...</div>}
      {isReposLoading && <div>Loading repositories...</div>}
      {username &&
        filtredRepos.map((repo) => (
          <RepoItem key={repo.id} repository={repo} />
        ))}
    </div>
  );
};

export default UserPage;
