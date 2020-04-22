import React, { useState } from 'react';
import './App.css';

function Joke(components){
const [IsHide, setIsHide] = useState(false);

  return <div className="joke-container">
    <h3>{components.author}</h3>
    <hr></hr>
    {components.question &&
    <h4 onMouseEnter={() => setIsHide(true)}
        onMouseLeave={() => setIsHide(false)}
        className="question">{components.question}?</h4>
    }
    {components.question && (
      IsHide && (
        <p>{components.punchLine}</p>
      )
    )}
    {!components.question && 
        <p>{components.punchLine}</p>
    }
  </div>
}

function App() {
    return (
      <div className="main">
          <Joke author="Sam" question="A man was injected with a deadly poison, but, it did not kill him. Why?" punchLine = "He was already dead!"/>
          <Joke author="Tom" question="What's the definition of a pessimist?" punchLine = "A pessimist is a well-informed optimist."/>
          <Joke author="Jerry" question="What is the longest word in the English language?" punchLine = "'Smiles'. Because there is a mile between its first and last letters!"/>
          <Joke author="Alice" question="Why did the bald man paint rabbits on his head?" punchLine = "Because from a distance they looked like hares!"/>
          <Joke author="Kek" punchLine="Mark called in to see his friend Angus (a Scotman) to find he was stripping the wallpaper from the walls. Rather obviously, he remarked 'You're decorating, I see.' to which Angus replied 'No. I'm moving house.'"/>
          <Joke author="Lina" punchLine="And the Scotsman was thinking: 'This is great. The next time the train goes through a tunnel I'll make that kissing noise and slap that English b**tard again"/>
          <Joke author="Alex" punchLine="An Englishman, roused by a Scot's scorn of his race, protested that he was born an Englishman and hoped to die an Englishman. 'Man,' scoffed the Scot, 'hiv ye nae ambeetion (Have you no ambition)?'"/>
          <Joke author="Sam" question="A man was injected with a deadly poison, but, it did not kill him. Why?" punchLine = "He was already dead!"/>
          <Joke author="Tom" question="What's the definition of a pessimist?" punchLine = "A pessimist is a well-informed optimist."/>
          <Joke author="Jerry" question="What is the longest word in the English language?" punchLine = "'Smiles'. Because there is a mile between its first and last letters!"/>
          <Joke author="Alice" question="Why did the bald man paint rabbits on his head?" punchLine = "Because from a distance they looked like hares!"/>
          <Joke author="Kek" punchLine="Mark called in to see his friend Angus (a Scotman) to find he was stripping the wallpaper from the walls. Rather obviously, he remarked 'You're decorating, I see.' to which Angus replied 'No. I'm moving house.'"/>
          <Joke author="Lina" punchLine="And the Scotsman was thinking: 'This is great. The next time the train goes through a tunnel I'll make that kissing noise and slap that English b**tard again"/>
          <Joke author="Alex" punchLine="An Englishman, roused by a Scot's scorn of his race, protested that he was born an Englishman and hoped to die an Englishman. 'Man,' scoffed the Scot, 'hiv ye nae ambeetion (Have you no ambition)?'"/>
      
      </div>
    );
  }
  
  export default App;