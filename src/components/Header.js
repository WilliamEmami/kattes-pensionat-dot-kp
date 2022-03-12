import Button from "./Button.js";

const Header = (props) => {
  //   const onClick = () => {
  //     console.log("Click!");
  //   };
  return (
    <header>
      {props.text}
      {/* <Button color="green" text="Hello" onClick={onClick} />  */}
    </header>
  );
};

export default Header;

//CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
