const User = ({ name, age, onNameChange }) => {
    return (
        <>
            <p>
                Pozdrav, moje ime je <strong>{name}</strong> i imam {age} godina.
            </p>
            <div className="input-group mb-3">
                <span className="input-group-text">Promjena imena</span>
                <input
                    className="form-control"
                    type="text"
                    onChange={onNameChange}
                    value={name}
                    // čemu služi ovo?
                    disabled={!onNameChange}
                />
            </div>
        </>
    );
};

export default User;
