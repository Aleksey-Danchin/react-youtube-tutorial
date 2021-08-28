import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { edit } from "../store/users";

const UserPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = parseInt(params.userId, 10);

  const user = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);

  const saveHandler = useCallback(() => {
    dispatch(
      edit({
        id: userId,
        name,
        surname
      })
    );

    history.push("/");
  }, [dispatch, userId, name, surname, history]);

  return (
    <div>
      <p>
        Имя: <input value={name} onChange={(e) => setName(e.target.value)} />
      </p>
      <p>
        Фамилия:
        <input value={surname} onChange={(e) => setSurname(e.target.value)} />
      </p>
      <button onClick={saveHandler}>Сохранить</button>
    </div>
  );
};

export default UserPage;
