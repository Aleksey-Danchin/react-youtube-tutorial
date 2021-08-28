import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainPage = () => {
  const users = useSelector((state) => state.users);

  return (
    <table border={2}>
      <thead>
        <tr>
          <th>id</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>
              <Link to={`/user/${user.id}`}>
                <button>Перейти</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainPage;
