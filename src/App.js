import React, { Component } from 'react'
import data from './data';
import { icons } from "../src/artwork/svgs";
import './App.css'

class App extends Component {
  state={data};
  constructor(props){
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
  }
  componentWillMount() {

  }
  getTime = (time) => {
    const minutes = Math.floor(time/60);
    const seconds = (time - (minutes*60));
    return `00:${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`;
  }
  
  renderIcon(iconName, color, size, cssClass) {
    const Comp = icons[iconName];
    let className = cssClass;
    if(!className){
      className = iconName + ' icon ' + (color ? color :'');
    }
    return (<Comp className={className} width={size ? size: undefined } height={size ? size: undefined } />);
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="container">
          {this.state.data && this.state.data.length > 0 ? this.state.data.map((d, i) => {
            return (
              <div className="flex-container" key={d.id}>
                <div className="item timestamp">
                  {this.getTime(d.time)}
                </div>
                <div className="timeline">
                  <div className="timeline-spot" style={d.icon && d.icon !== 'checkbox' ? {backgroundColor: "white"} : {}}>
                      {d.icon && d.icon !== 'checkbox' ? this.renderIcon(d.icon, d.color, 30, "timeline-icon") :
                      <div className="timeline-spot-no-icon"></div>
                    }
                  </div>
                </div>
                  <div className="item event-entry-container" style={d.backgroundColor ? { backgroundColor: '#A92D24', color: 'white' }: {}}>
                    <div className="arrow" style={d.backgroundColor ? { borderRightColor: '#A92D24'}: {}}></div>
                    <div className="event-entry">
                      <div className={d.evaluation ? "title underline" : "title"}>
                          <h3 className={d.subtitle ?"title-text with-subtitle":"title-text"}>{d.title} <br />{d.subtitle ? <span className="subtitle" style={d.color ? { color: '#A92D24' }: {}}>{d.subtitle}</span> : ''}</h3>
                      </div>
                      {d.notes ? 
                          <div className="notes">
                          <p>{d.notes}</p>
                          </div>
                        : ''}
                      {d.evaluation ? 
                      <div className="details" style={{ color: d.color ? '#A92D24' : 'inherit'}}>
                        <div className="details-text">{d.evaluation.text}</div>
                        <div className="details-icon">
                          <div className="icon">{d.evaluation.score ? <p className="icon-text">{d.evaluation.score}/{d.evaluation.maxScore}</p> : ''}
                            {d.evaluation.icon ? this.renderIcon(d.evaluation.icon, d.color) : ''}
                          </div>
                        </div>
                      </div>
                      :''}
                    </div>
                  </div>
              </div>
            );
          }):''}
        </div>
      </div>
    );
  }
}

export default App;
