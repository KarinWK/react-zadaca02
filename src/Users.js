import User from "./User";

const Users = ({ users }) => {
    return (
        <>
            <p className="text-primary">
                Komponenta Users koja ne prikazuje što bih željela da prikazuje...
            </p>
            {users.map((user, index) => {
                return;
                <User
                    key={user.key}
                    name={user.name}
                    age={user.age}
                    onNameChange={(event) => this.handleNameChange(event, index)}
                />;
            })}
        </>
    );
};

export default Users;
