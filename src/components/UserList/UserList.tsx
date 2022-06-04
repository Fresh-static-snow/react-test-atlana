import React, { KeyboardEventHandler, useState } from "react";
import { userAPI } from "../../services/UserService";
import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.scss";

const UserList = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [perPage, setPerPage] = useState(21);

  const { data, isLoading, isError } = userAPI.useGetAllUsersQuery({
    searchQuery,
    perPage,
  });

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onEnterPress = (e: React.KeyboardEvent) => {
    if (e.key.toLowerCase() === "enter") {
      setSearchQuery(searchValue);
    }
  };

  console.log(data?.items);

  return (
    <div className={styles.container}>
      <input
        value={searchValue}
        onChange={onChangeSearch}
        type="text"
        placeholder="search..."
        className={styles.search}
        onKeyUp={(e) => onEnterPress(e)}
      />
      <div className={styles.list}>
        {isLoading && <div>Loading data...</div>}
        {isError && <div>Server error...</div>}
        {data &&
          data.items.map((user) => <UserItem key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default UserList;
