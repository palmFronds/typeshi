import React from 'react';
import QuestionScreen from './QuestionScreen';

export default function RiskComfort() {
  return (
    <QuestionScreen
      heading="<u>let's start with the most important thing.</u>"
      subtext="most people jump straight to &ldquo;How do I make money?&rdquo;<br/>pros start with a <strong>better</strong> question: &ldquo;What am I willing to lose, potentially?&rdquo;"
      cards={[
        {
          id: 'steady',
          title: 'i prefer steady + predictable.',
          subtitle: '(I don\'t want my balance jump around.)'
        },
        {
          id: 'moderate',
          title: 'i can handle ups + downs.',
          subtitle: '(some movement doesn\'t shake me.)'
        },
        {
          id: 'swings',
          title: 'i\'m ok with bigger swings.',
          subtitle: '(i know i need to risk a lot to win a lot.)'
        },
        {
          id: 'unsure',
          title: 'not sure yet.',
          subtitle: '(not a bad place to start.)'
        }
      ]}
      progressPercent={75}
      nextRoute="/orientation/walkthrough"
      screenId="risk-comfort"
      backgroundOverlay="risk-overlay"
    />
  );
}
