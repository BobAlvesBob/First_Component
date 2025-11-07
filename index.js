 function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class JSXDemo extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1>Your lucky number is: {num}</h1>
        
          {num === 7  ? (
            <div>
            Congratulations You Win!<br />
            <img src="yes.gif" alt="Celebration" />
            </div>

  ) : ( 
    <div>Sorry You Lose!<br />
    <img src="cry-498-x-373-gif-gqa0f76s1a2k54bt.gif" alt="Sad" />

    </div>)
  }
          </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));