import { Component } from 'react';
import { FeedbackOptions } from './leaveFeedback/leavefdb';
import { Statistic } from './statistic/statistic';
import { Section } from './Section/section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const state = this.state;
    let sum = 0;
    for (let key in state) {
      sum += state[key];
    }
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions onLeaveFeedback={(data)=>this.setState(data)} options={this.state}/>
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
