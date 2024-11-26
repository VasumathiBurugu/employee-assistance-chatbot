import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

const EmployeeChatbot = () => {
  const [query, setQuery] = useState('');
  const [buttonHover, setButtonHover] = useState(false);
  const [sendButtonHover, setSendButtonHover] = useState(false); // Added this state

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSendClick = () => {
    if (query.trim()) {
      alert(`Sending message: ${query}`);
      setQuery('');  // Reset the input field after sending the message
    }
  };

  const handleAttachmentClick = () => {
    alert("Attachment button clicked!");
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar Section */}
      <div style={sidebarStyle}>
        <h2 style={sidebarHeadingStyle}>Esolutions</h2> {/* Updated text here */}

        {/* Employee Solutions Section 1 */}
        <div style={sectionStyle}>
          <h3>IT Support</h3>
        </div>

        {/* Employee Solutions Section 2 */}
        <div style={sectionStyle}>
          <h3>HR Assistance</h3>
        </div>

        {/* Employee Solutions Section 3 */}
        <div style={sectionStyle}>
          <h3>Finance Queries</h3>
        </div>
      </div>

      {/* Chat Area */}
      <div style={chatAreaStyle}>
        <h1 style={{ textAlign: 'center' }}>Employee Chatbot</h1>

        {/* Bottom Section */}
        <div style={bottomSectionStyle}>
          <p style={bottomTextStyle}>How can I assist you today?</p>
          <div style={inputBarStyle}>
            {/* Attachment Button */}
            <button
              onClick={handleAttachmentClick}
              style={buttonHover ? { ...attachmentButtonStyle, backgroundColor: '#333', boxShadow: '0 4px 10px rgba(0, 123, 255, 0.5)' } : attachmentButtonStyle}
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              aria-label="Attach File"
            >
              📎
            </button>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Type your message here..."
              style={inputStyle}
            />
            {/* Send Icon Button */}
            <button
              onClick={handleSendClick}
              style={sendButtonHover ? { ...sendButtonStyle, backgroundColor: '#007bff' } : sendButtonStyle}
              onMouseEnter={() => setSendButtonHover(true)}
              onMouseLeave={() => setSendButtonHover(false)}
              aria-label="Send Message"
            >
              <i className="fa fa-paper-plane" style={{ fontSize: '20px', color: '#000' }}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  backgroundColor: '#343541',
  color: '#fff',
  minHeight: '100vh',
};

const sidebarStyle = {
  width: '25%',
  padding: '20px',
  backgroundColor: '#444654',
};

const sidebarHeadingStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const sectionStyle = {
  marginBottom: '20px',
  backgroundColor: '#555',
  padding: '15px',
  borderRadius: '8px',
};

const chatAreaStyle = {
  width: '75%',
  padding: '20px',
  position: 'relative',
};

const bottomSectionStyle = {
  position: 'fixed',
  bottom: '20px',
  left: '27%', // Align with the left side of the chat area
  width: '65%', // Adjust width for the chat area
  textAlign: 'center', // Center only the text inside
};

const bottomTextStyle = {
  fontSize: '18px',
  color: '#fff',
  marginBottom: '10px',
  fontWeight: 'bold',
  textAlign: 'center', // Center the prompt text
};

const inputBarStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 20px',
  backgroundColor: '#444654',
  borderRadius: '30px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  width: '100%',
};

const attachmentButtonStyle = {
  padding: '10px',
  backgroundColor: '#ffffff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '20px',
  color: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
};

const inputStyle = {
  width: '85%',
  height: '40px',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '20px',
  border: '1px solid #888',
  outline: 'none',
  backgroundColor: '#2a2b2d',
  color: '#fff',
};

const sendButtonStyle = {
  padding: '10px',
  backgroundColor: '#ffffff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '20px',
  color: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
};

export default EmployeeChatbot;
