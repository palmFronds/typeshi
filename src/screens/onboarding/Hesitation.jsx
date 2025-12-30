import React from 'react';
import QuestionScreen from './QuestionScreen';

export default function Hesitation() {
  return (
    <QuestionScreen
      heading="everyone is fundamentally different."
      subtext="help us get to know you better.<br/>how do <em>you</em> like approaching money?"
      cards={[
        {
          id: 'steady',
          title: 'slow and steady, all the way.',
          subtitle: '(I prefer predictable, even if it\'s slow)'
        },
        {
          id: 'medium',
          title: 'my thing is medium pace.',
          subtitle: '(I like exploring but keeping control.)'
        },
        {
          id: 'fast',
          title: 'fast curiosity.',
          subtitle: '(i prefer risky, calculated experiments)'
        },
        {
          id: 'unsure',
          title: 'i don\'t know, yet',
          subtitle: '(start me off, i\'ll tell you later)'
        }
      ]}
      progressPercent={25}
      nextRoute="/onboarding/goals"
      screenId="hesitation"
      backgroundOverlay="hesitation-overlay"
    />
  );
}
