import React, { useEffect, useState } from 'react';
import './ChatBot.css';
import { BiSend } from 'react-icons/bi';

function ChatBot() {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const getTime = () => {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let time = hours + ':' + minutes;
    return time;
  };

  const getResponse = () => {
    const userText = userInput.trim();

    if (userText != '') {
      const botMessage = {
        id: chatMessages.length + 1,
        message: userText,
        sender: 'user',
        timestamp: getTime(),
      };
      setChatMessages(prevMessages => [...prevMessages, botMessage]);
    }

    const defaultBotMessage = {
      id: chatMessages.length + 2,
      message: "hi i am vikash's bot.",
      sender: 'bot',
      timestamp: getTime(),
    };
    setChatMessages(prevMessages => [...prevMessages, defaultBotMessage]);

    setUserInput('');
  };

  const handleKeyPress = e => {
    if (e.which === 13) {
      getResponse();
    }
  };

  useEffect(() => {
    const firstBotMessage = () => {
      const botMessage = {
        id: 1,
        message: "welcome my dear client",
        sender: 'bot',
        timestamp: getTime(),
      };
      setChatMessages([botMessage]);
    };

    firstBotMessage();
  }, []);

  useEffect(() => {
    const coll = document.getElementsByClassName('collapsible');

    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function () {
        this.classList.toggle('active');

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }

    // Clean up the event listeners when the component unmounts
    return () => {
      for (let i = 0; i < coll.length; i++) {
        coll[i].removeEventListener('click', function () {
          // Handle click event
        });
      }
    };
  }, []);

  return (
    <div className="chat-bar-collapsible">
      <button id="chat-button" type="button" className="collapsible">
        Chatbot
        <i id="chat-icon" className="fa fa-fw fa-comments-o"></i>
      </button>

      <div className="content">
        <div className="full-chat-block">
          <div className="outer-container">
            <div className="chat-container">
              <div id="chatbox">
                {chatMessages.map(message => (
                  <div key={message.id}>
                    <h5 className="chat-timestamp">{message.timestamp}</h5>
                    <p className={message.sender === 'bot' ? 'botText' : 'userText'}>
                      <span>{message.message}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="chat-bar-input-block">
                <div id="userInput">
                <input
                id="textInput"
                className="input-box"
                type="text"
                name="msg"
                placeholder="Tap 'Enter' to send a message"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
            </div>
            <div className="chat-bar-icons">
              <i
                id="chat-icon"
                style={{ color: 'crimson' }}
                className="fa fa-fw fa-heart"
              ></i>
              <i
                id="chat-icon"
                style={{ color: '#333' }}
                className="fa fa-fw fa-send"
                onClick={getResponse}
              >
                <BiSend />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}

export default ChatBot;
