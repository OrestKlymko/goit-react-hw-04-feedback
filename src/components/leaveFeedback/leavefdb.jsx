import css from './leavefdb.module.css';

export const FeedbackOptions = ({options,onLeaveFeedback}) => {


  const changeVote=(vote)=> {
    console.log(vote)
  const newOptions = {...options, [vote]:options[vote]+1}
    onLeaveFeedback(newOptions)

  }


  return (
    <div>
      <button className={css.good} onClick={()=>changeVote('good')}>
        Good
      </button>
      <button className={css.neutral} onClick={()=>changeVote('neutral')}>
        Neutral
      </button>
      <button className={css.bad} onClick={()=>changeVote('bad')}>
        Bad
      </button>
    </div>
  );
};
// const vote = e => {
//   switch (e.target.innerText) {
//     case 'Good':
//       this.setState(prevEvent => ({
//         good: prevEvent.good + 1,
//       }));
//       break;
//
//     case 'Neutral':
//       this.setState(prevEvent => ({
//         neutral: prevEvent.neutral + 1,
//       }));
//       break;
//     case 'Bad':
//       this.setState(prevEvent => ({
//         bad: prevEvent.bad + 1,
//       }));
//       break;
//   }
// };
//   const onLeaveFeedback = e => {
//     switch (e.target.innerText) {
//       case 'Good':
//         options.good=options.good+1
//         break;
//
//       case 'Neutral':
//           options.neutral=options.neutral+1
//         break;
//       case 'Bad':
//         options.bad=options.bad+1
//         break;
//     }
//   };
//
//
//   return (
//     <div>
//       <button className={css.good} onClick={e => onLeaveFeedback(e)}>
//         Good
//       </button>
//       <button className={css.neutral} onClick={e => onLeaveFeedback(e)}>
//         Neutral
//       </button>
//       <button className={css.bad} onClick={e => onLeaveFeedback(e)}>
//         Bad
//       </button>
//     </div>
//   );
// };

// const onLeaveFeedback = e => {
//   switch (e.target.innerText) {
//     case 'Good':
//       options.good=options.good+1
//       break;
//
//     case 'Neutral':
//       options.neutral=options.neutral+1
//       break;
//     case 'Bad':
//       options.bad=options.bad+1
//       break;
//   }
// };
