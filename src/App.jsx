import React, { Children } from "react";
import User from "./User";
import Users from "./Users";

export default class App extends React.Component {
    state = {
        users: [
            { id: 1, name: "Ivan", age: 30 },
            { id: 2, name: "Marko", age: 35 },
            { id: 3, name: "Ana", age: 25 },
        ],
    };

    handleButtonPress = () => {
        const { users } = this.state;

        const newUsers = users.map((user) => {
            return { ...user, age: user.age + 1 };
        });

        this.setState({ users: newUsers });
    };

    handleNameChange = (event, index) => {
        const { users } = this.state;
        const newUsers = [...users];

        newUsers[index].name = event.target.value;
        this.setState({ users: newUsers });
    };

    render() {
        const { users } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>React aplikacija</h1>
                        <p>Ovo zbilja radi</p>
                        <button
                            className="btn btn-primary mb-3"
                            onClick={this.handleButtonPress}
                        >
                            Promjena godina
                        </button>

                        {/* Kako da ovo dolje strpam u komponentu Users? */}
                        {users.map((user, index) => (
                            <User
                                key={user.id}
                                name={user.name}
                                age={user.age}
                                onNameChange={(event) => this.handleNameChange(event, index)}
                            />
                        ))}
                        {/* Ovako očito ne jer ne radi. Pretpod User  komponente? */}
                        <Users users={users} />
                    </div>
                </div>
            </div>
        );
    }
}
