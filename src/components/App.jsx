import { useState } from 'react';
import { FeedbackOptions } from './leaveFeedback/leavefdb';
import { Statistic } from './statistic/statistic';
import { Section } from './Section/section';
import { Notification } from './Notification/Notification';

export function App() {
  const [state, setState]=useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  const countTotalFeedback = () => {
    let sum = 0;
    for (let key in state) {
      sum += state[key];
    }
    return sum;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };


    const { good, neutral, bad } = state;
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions onLeaveFeedback={(data)=>setState(data)} options={state}/>
        </Section>
        <Section title="Statistic">
          {countTotalFeedback() > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={countTotalFeedback}
              countPositiveFeedbackPercentage={
                countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
}
