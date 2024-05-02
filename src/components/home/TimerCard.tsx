const TimerCard = () => {
  return (
    <>
      <div className="timer__card--display">
        <div className="timer__card--display--loader">05:08:56</div>
      </div>
      <div className="timer__card--controlPanel">
        <div className="timer__card--controls">
          <div className="timer__card--controls-sep">
            <p className="timer__card--controls-sep--text">Hours</p>
            <div className="timer__card--controls--actions">
              <button type="button">
                <img alt="up" src="/src/assets/images/upControl.png" />
              </button>
              <p className="timer__Card--controls--value">05</p>
              <button type="button">
                <img alt="up" src="/src/assets/images/downControl.png" />
              </button>
            </div>
          </div>
          <div className="timer__card--controls-sep">
            <p className="timer__card--controls-sep--text">Minutes</p>
            <div className="timer__card--controls--actions">
              <button type="button">
                <img alt="up" src="/src/assets/images/upControl.png" />
              </button>
              <p className="timer__Card--controls--value">09</p>
              <button type="button">
                <img alt="up" src="/src/assets/images/downControl.png" />
              </button>
            </div>
          </div>
          <div className="timer__card--controls-sep">
            <p className="timer__card--controls-sep--text">Seconds</p>
            <div className="timer__card--controls--actions">
              <button type="button">
                <img alt="up" src="/src/assets/images/upControl.png" />
              </button>
              <p className="timer__Card--controls--value">00</p>
              <button type="button">
                <img alt="up" src="/src/assets/images/downControl.png" />
              </button>
            </div>
          </div>
        </div>
        <button type="button" className="timer__card--start">
          Start
        </button>
      </div>
    </>
  );
};
export default TimerCard;
