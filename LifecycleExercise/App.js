class Clock extends React.Component {
 state = {
   time: {
     hours: 12,
     minutes: 10,
     seconds: 20
   }
 }
 render() {
   return (
    <div>
      {this.state.time.hours} : {this.state.time.minutes}
    </div>
   );
 }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
