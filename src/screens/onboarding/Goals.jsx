import React from 'react';
import QuestionScreen from './QuestionScreen';

export default function Goals() {
  return (
    <QuestionScreen
      heading="what are you trying to get good at?"
      subtext="help us meet you <em>exactly</em> where you want to go."
      cards={[
        {
          id: 'first-buy',
          title: 'making my first buy confidently.',
          subtitle: '(i don\'t want to guess with any of it)'
        },
        {
          id: 'basics',
          title: 'understanding the basics quickly.',
          subtitle: '(i want to learn clearly and strongly)'
        },
        {
          id: 'habits',
          title: 'building good long-term habits.',
          subtitle: '(i want consistency, not randomness)'
        },
        {
          id: 'unsure',
          title: 'im not sure yet.',
          subtitle: '(i\'d rather answer this later)'
        }
      ]}
      progressPercent={50}
      nextRoute="/onboarding/risk-comfort"
      screenId="goals"
    />
  );
}
