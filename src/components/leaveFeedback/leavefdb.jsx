import css from './leavefdb.module.css';
export const FeedbackOptions = ({ vote }) => {
  return (
    <div>
      <button className={css.good} onClick={e => vote(e)}>
        Good
      </button>
      <button className={css.neutral} onClick={e => vote(e)}>
        Neutral
      </button>
      <button className={css.bad} onClick={e => vote(e)}>
        Bad
      </button>
    </div>
  );
};
