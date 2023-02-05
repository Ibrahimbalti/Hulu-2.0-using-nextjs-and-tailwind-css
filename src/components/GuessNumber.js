export default function GuessNumber() {
  const gussNumber = () => {
    var guess = prompt("Enter number between 1 to 10");
    var number = Math.ceil(Math.random() * 10);
    if (guess == number) {
      return <h1>Enter number is matched</h1>;
    } else {
      return <h1>Enter number is not matched</h1>;
    }
  };

  return (
    <>
      <h1>Guess Number</h1>
      <br />
      {gussNumber()}
    </>
  );
}
