import React, { useState } from 'react';
import './ChatBot.css';
import { BiSend } from 'react-icons/bi';
import { BsChatDotsFill } from 'react-icons/bs';

const ChatBot = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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

    if (userText !== '') {
      const botMessage = {
        id: chatMessages.length + 1,
        message: userText,
        sender: 'user',
        timestamp: getTime(),
      };
      setChatMessages((prevMessages) => [...prevMessages, botMessage]);

      // Check if userText matches a specific command or keyword
      if (userText.toLowerCase() === 'home') {
        // Redirect to the home page
        window.location.href = '/';
        return;
      } else if (userText.toLowerCase() === 'contact') {
        // Redirect to the contact us page
        window.location.href = '/contact';
        return;
      }
      else if (userText.toLowerCase() === 'services') {
        // Redirect to the contact us page
        window.location.href = '/Services';
        return;
      }
    }

    const defaultBotMessage = {
      id: chatMessages.length + 2,
      message:
        "Hi, I am Jurident, your virtual assistant for legal advice. How can I assist you today? type home,contact or services to navigate to the respective pages.",
      sender: 'bot',
      timestamp: getTime(),
    };
    setChatMessages((prevMessages) => [...prevMessages, defaultBotMessage]);

    setUserInput('');
  };

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      getResponse();
    }
  };

  return (
    <div className={`chat-bar-collapsible ${isExpanded ? 'expanded' : ''}`}>
      <button
        id="chat-button"
        type="button"
        className="collapsible"
        onClick={toggleExpand}
      >
        <BsChatDotsFill />
        <i id="chat-icon" className="fa fa-fw fa-comments-o"></i>
      </button>

      {isExpanded && (
        <div className="content">
          <div className="full-chat-block">
            <div className="outer-container">
              <div className="chat-container">
                <div id="chatbox">
                  {chatMessages.map((message) => (
                    <div key={message.id}>
                      <h5 className="chat-timestamp">{message.timestamp}</h5>
                      <p
                        className={message.sender === 'bot' ? 'botText' : 'userText'}
                      >
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
                      onChange={(e) => setUserInput(e.target.value)}
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
      )}
    </div>
  );
};

export default ChatBot;
