import { Component } from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type ClockProps = {
  clockName: string;
};

type ClockState = {
  currentTime: Date;
  name: string;
};

export class Clock extends Component<ClockProps, ClockState> {
  nameTimerId: NodeJS.Timeout | undefined;

  timeTimerId: NodeJS.Timeout | undefined;

  state: ClockState = {
    currentTime: new Date(),
    name: this.props.clockName,
  };

  componentDidMount() {
    this.nameTimerId = setInterval(() => {
      this.setState(prevState => {
        const oldName = prevState.name;
        const newName = getRandomName();

        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${oldName} to ${newName}`);

        return { name: newName };
      });
    }, 3300);

    this.timeTimerId = setInterval(() => {
      const newDate = new Date();

      this.setState({ currentTime: newDate });

      // eslint-disable-next-line no-console
      console.log(newDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  // componentDidUpdate(_: Readonly<ClockProps>, prevState: ClockState) {
  //   const { name } = this.state;

  //   if (prevState.name !== name) {
  //     // eslint-disable-next-line no-console
  //     console.warn(`Name changed from ${prevState.name} to ${name}`);
  //   }
  // }

  componentWillUnmount() {
    if (this.nameTimerId) {
      clearInterval(this.nameTimerId);
    }

    if (this.timeTimerId) {
      clearInterval(this.timeTimerId);
    }
  }

  render() {
    const { currentTime, name } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
