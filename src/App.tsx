import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface AppState {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, AppState> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleShowClock = () => {
    this.setState({ hasClock: true, clockName: 'Clock-4900' });
  };

  componentDidMount() {
    addEventListener('contextmenu', this.handleHideClock);
    addEventListener('click', this.handleShowClock);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}

// state = {
//   clockName: 'Clock-0',
//   today: new Date(),
//   hasClock: true,
// };

// nameTimerId: number | null = null;

// timeTimerId: number | null = null;

// getRandomName(): string {
//   const value = Date.now().toString().slice(-4);

//   return `Clock-${value}`;
// }

// clockNameHandler = () => {
//   if (this.nameTimerId !== null) {
//     window.clearInterval(this.nameTimerId);
//   }

//   this.nameTimerId = window.setInterval(() => {
//     if (this.state.hasClock) {
//       this.setState(prevState => {
//         const oldName = prevState.clockName;
//         const newName = this.getRandomName();

//         // eslint-disable-next-line no-console
//         console.warn(`Renamed from ${oldName} to ${newName}`);

//         return { clockName: newName };
//       });
//     }
//   }, 3300);
// };

// clockTimeHandler = () => {
//   if (this.timeTimerId !== null) {
//     window.clearInterval(this.timeTimerId);
//   }

//   const startTime = Date.now();

//   this.timeTimerId = window.setInterval(() => {
//     if (this.state.hasClock) {
//       const elapsed = Math.floor((Date.now() - startTime) / 1000);
//       const updatedTime = new Date(startTime + elapsed * 1000);

//       this.setState({ today: updatedTime });

//       // eslint-disable-next-line no-console
//       console.log(updatedTime.toUTCString().slice(-12, -4));
//     }
//   }, 1000);
// };

// hideClock = (event: MouseEvent) => {
//   event.preventDefault();
//   this.setState({ hasClock: false });

//   if (this.timeTimerId !== null) {
//     window.clearInterval(this.timeTimerId);
//     this.timeTimerId = null;
//   }

//   // if (this.nameTimerId !== null) {
//   //   window.clearInterval(this.nameTimerId);
//   //   this.nameTimerId = null;
//   // }
// };

// showClock = () => {
//   this.setState(
//     {
//       hasClock: true,
//       today: new Date(),
//       clockName: 'Clock-4900',
//     },
//     () => {
//       this.clockNameHandler();

//       if (!this.timeTimerId) {
//         this.clockTimeHandler();
//       }
//     },
//   );
// };

// componentDidMount() {
//   this.clockNameHandler();
//   this.clockTimeHandler();
//   window.addEventListener('contextmenu', this.hideClock);
//   window.addEventListener('click', this.showClock);
// }

// componentWillUnmount(): void {
//   if (this.nameTimerId) {
//     window.clearInterval(this.nameTimerId);
//   }

//   if (this.timeTimerId) {
//     window.clearInterval(this.timeTimerId);
//   }

//   window.removeEventListener('contextmenu', this.hideClock);
//   window.removeEventListener('click', this.showClock);
// }
