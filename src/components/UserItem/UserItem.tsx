import React, { FC } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { IUser } from "../../models/types";
import styles from "./UserItem.module.scss";
import User from "../../assets/photo-cover.svg";

interface IUserItemProps {
  user: IUser;
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate(`/users/${user.login}`);
  };

  return (
    <div className={styles.container}>
      <div onClick={navigateToProduct} className={styles.wrapper}>
        <Link to={`${user.login}`} className={""}>
          <img
            className={styles.avatar}
            src={user.avatar_url}
            onError={(e: any) => {
              e.target.src = User;
              e.onerror = null;
            }}
            alt="user"
          />
        </Link>
        <Link to={`${user.login}`} className={styles.info}>
          <div>{user.login}</div>
        </Link>
      </div>

      <div className={styles.repos}>id -{user.id}</div>
    </div>
  );
};

export default UserItem;
