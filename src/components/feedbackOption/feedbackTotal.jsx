import { Component } from 'react';

export class TotalPercent extends Component {
  render() {
    const { countPositiveFeedbackPercentage, countTotalFeedback } = this.props;
    return (
      <div>
        Positive feedback:
        {countTotalFeedback() > 0 ? countPositiveFeedbackPercentage() : 0}%
      </div>
    );
  }
}
