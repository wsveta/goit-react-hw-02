import css from "./Options.module.css";

const Options = ({ updateFeedback, total, reset }) => {
  return (
    <ul className={css.options}>
      <li className={css.option}>
        <button className={css.optionBtn}
          onClick={() => {
            updateFeedback("good");
          }}
        >
          Good
        </button>
      </li>
      <li className={css.option}>
        <button className={css.optionBtn}
          onClick={() => {
            updateFeedback("neutral");
          }}
        >
          Neutral
        </button>
      </li>
      <li className={css.option}>
        <button className={css.optionBtn}
          onClick={() => {
            updateFeedback("bad");
          }}
        >
          Bad
        </button>
      </li>
      {total > 0 && (<li className={css.option}>
        <button className={css.resetBtn} onClick={() => {
            reset();
        }}>Reset</button>
      </li>)}
    </ul>
  );
};

export default Options;
