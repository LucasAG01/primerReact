import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Button2 from "./Button2";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <Header></Header>
      <Card></Card>
      <Card></Card>
      <Food></Food>
      <Food></Food>
      <hr></hr>
      {/*Una línea horizontal*/}
      <Button></Button>

      <Button2></Button2>

      <Student name="SpongeBob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name="Sandy" age={27} isStudent={true}></Student>

      <UserGreeting isLoggedIn={true} username="lucas"></UserGreeting>

      <Footer></Footer>
    </>
  );
}

export default App;
