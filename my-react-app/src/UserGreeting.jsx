function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h2 className="welcome-message">Bienvenido {props.username}</h2>;
  } else {
    return <h2 className="login-prompt">Porfavor logueate </h2>;
  }
}
export default UserGreeting;
