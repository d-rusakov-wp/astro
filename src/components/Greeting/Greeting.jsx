import { useState } from 'preact/hooks';
import './Greeting.sass';

export default function Greeting({messages, name}) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div className='greeting' data-name={name}>
      <h3>{greeting}! Всем привет!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        Новое приветствие
      </button>
    </div>
  );
}
