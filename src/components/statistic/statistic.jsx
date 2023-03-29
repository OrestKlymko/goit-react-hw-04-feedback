import { Component } from 'react';
import { TotalPercent } from 'components/feedbackOption/feedbackTotal';

export class Statistic extends Component {
  render() {
    const {
      good,
      neutral,
      bad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this.props;
    return (
      <div>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
        <div>Total: {countTotalFeedback()}</div>
        <TotalPercent
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
