import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./usersSlice";

export const UserList = () => {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    if (status === "loading") return <div>Loading...</div>;
    if (status === "failed") return <div>Error: {error}</div>;

    return (
        <ul>
            {users.map((u) => (
                <li key={u.id}>
                    <strong>{u.title}</strong> <br />
                    {u.body}
                </li>
            ))}
        </ul>
    );
};
