import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, addGood] = useState(0);
  const [neutral, addNeutral] = useState(0);
  const [bad, addBad] = useState(0);

  const updateFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        addGood(good + 1);
        break;
      case 'neutral':
        addNeutral(neutral + 1);
        break;
      case 'bad':
        addBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    const total = totalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  const options = ['good', 'neutral', 'bad'];
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} updateFeedback={updateFeedback} />
      </Section>
      {totalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positivePercentage()}
          />
        </Section>
      ) : (
        <Notification />
      )}
    </>
  );
};
