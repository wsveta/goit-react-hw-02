import css from './Feedback.module.css';

const Feedback = ({good, neutral, bad, total}) => {
  return (
    <ul className={css.feedbackOptions}>
      <li className={css.feedbackOption}>
        <p>Good: </p>
        <span>{good}</span>
      </li>
      <li className={css.feedbackOption}>
        <p>Neutral: </p>
        <span>{neutral}</span>
      </li>
      <li className={css.feedbackOption}>
        <p>Bad: </p>
        <span>{bad}</span>
      </li>
      <li className={css.feedbackOption}>
        <p>Total: </p>
        <span>{total}</span>
      </li>
      <li className={css.feedbackOption}>
        <p>Positive: </p>
        <span>{Math.round(((good + neutral) / total) * 100) + '%'
}</span>
      </li>
    </ul>
  )
}

export default Feedback;