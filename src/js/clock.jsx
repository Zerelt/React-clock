import '../css/master.scss';
import React from 'react';
import ReactDOM from 'react-dom';

var Clock = React.createClass({
  getInitialState: function() {
    return {
      h: '',
      m: '',
      s: '',
      dynr: '',
      dynme:'',
      mnth: '',
      yr: '',
      colorMe:'',
      message:''
    };
  },
  componentDidMount: function() {
    this.timer = setInterval(this.currentDay, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
  },
  currentDay: function() {
    var y = new Date();
    var a = y.getHours();
    var b = y.getMinutes();
    var c = y.getSeconds();
    var d = y.getDate();
    var e = y.getDay()
    var f = y.getMonth() + 1;
    var g = y.getFullYear();

    this.setState({
      h: a,
      m: b,
      s: c,
      dynr: d,
      dynme:e,
      mnth: f,
      yr: g
    });
    if (this.state.h >= 5 && this.state.h <= 12) {
      this.setState({colorMe:'#ee5c42', message: 'Good morning ! It\'s :'});
    } else if (this.state.h > 12 && this.state.h < 18) {
      this.setState({colorMe:'orange', message: 'Good afternoon ! It\'s :'});
    } else if (this.state.h >= 18 && this.state.h <= 21 ){
      this.setState({colorMe:'#ffff94', message: 'Good evening ! It\'s :'});
    } else if(this.state.h > 21 || this.state.h < 5) {
      this.setState({colorMe:'#fff', message: 'Good evening ! It\'s :'});
    }
  },

  render: function() {
    if (this.state.h >= 5 && this.state.h <= 12) {
      document.body.style.backgroundColor='rgb('+230+','+250+','+36+')';
      document.body.style.backgroundImage='linear-gradient(to bottom, rgb('+230+','+250+','+36+'), rgb('+253+','+51+','+191+'))';
    }
    else if (this.state.h > 12 && this.state.h < 18) {
      document.body.style.backgroundColor='rgb('+254+','+246+','+141+')';
      document.body.style.backgroundImage='linear-gradient(to bottom, rgb('+254+','+246+','+141+'), rgb('+45+','+193+','+219+'))';
    }
    else if (this.state.h >= 18 && this.state.h <= 21 ){
      document.body.style.backgroundColor='rgb('+209+','+85+','+67+')';
      document.body.style.backgroundImage='linear-gradient(to bottom, rgb('+209+','+85+','+67+'), rgb('+67+','+98+','+178+'))';
    }
    else if(this.state.h > 21 || this.state.h < 5) {
      document.body.style.backgroundColor='rgb('+0+','+0+','+0+')';
      document.body.style.backgroundImage='none';
    }

    var styleOptions={
      color:this.state.colorMe
    }

    //Change month from numbers to literal
    switch (this.state.mnth) {
      case 1:
        this.state.mnth = 'January';
        break;
      case 2:
        this.state.mnth = 'February';
        break;
      case 3:
        this.state.mnth = 'March';
        break;
      case 4:
        this.state.mnth = 'April';
        break;
      case 5:
        this.state.mnth = 'May';
        break;
      case 6:
        this.state.mnth = 'June';
        break;
      case 7:
        this.state.mnth = 'July';
        break;
      case 8:
        this.state.mnth = 'August';
        break;
      case 9:
        this.state.mnth = 'September';
        break;
      case 10:
        this.state.mnth = 'october';
        break;
      case 11:
        this.state.mnth = 'November';
        break;
      case 12:
        this.state.mnth = 'December';
        break;
    }

    //change day from number to literal
    switch(this.state.dynme) {
      case 0:
        this.state.dynme = 'Sunday';
        break;
      case 1:
        this.state.dynme = 'Monday';
        break;
      case 2:
        this.state.dynme = 'Tuesday';
        break;
      case 3:
        this.state.dynme = 'Wendsday';
        break;
      case 5:
        this.state.dynme = 'Thursday';
        break;
      case 5:
        this.state.dynme = 'Friday';
        break;
      case 6:
        this.state.dynme = 'Saturday';
        break;
    }

    return (
      <div className='box'>
        <div className='innerBox'>
          <p>{this.state.message}</p>
          <div className='time' style={styleOptions}>
            <span className='numbers' ref='hours'>{this.state.h < 10 ? '0'+this.state.h : this.state.h}</span>
            <span className='separator'>:</span>
            <span className='numbers' ref='minutes'>{this.state.m < 10 ? '0'+this.state.m : this.state.m}</span>
            <span className='separator'>:</span>
            <span className='numbers' ref='seconds'>{this.state.s < 10 ? '0'+this.state.s : this.state.s}</span>
          </div>
          <div className='dayMonthYear'>
            <p>{this.state.dynme}, {this.state.mnth} {this.state.dynr} {this.state.yr}</p>
          </div>
        </div>
      </div>

    );
  }
});

ReactDOM.render(<Clock />, document.getElementById('app'));
