# Real-time Chat Application

A Node.js application demonstrating WebSocket-based real-time communication using Socket.io and Express.

## Features

- Real-time bidirectional messaging between connected clients.
- Display of current number of connected users.
- Typing indicator to show when a user is typing.
- Simple user interface built with HTML, CSS, and JavaScript.

## Tech Stack

- Node.js
- Express.js
- Socket.io
- JavaScript
- HTML
- CSS

## Project Structure

```
websocket/
├── server/
│   ├── public/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── package.json
│   └── server.js
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/sai-vinay-07/websocket.git
   ```

2. Navigate to the server directory:
   ```
   cd websocket/server
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the application:
   - For development:
     ```
     npm run dev
     ```
   - For production:
     ```
     npm start
     ```

5. Open your browser and go to http://localhost:3000.

## Configuration

The server runs on port 3000 by default. To change the port, modify the server.js file.

## Future Improvements

- Add user authentication.
- Implement message persistence with a database.
- Support for private chat rooms.
- Migrate frontend to a framework like React.

## License

This project is licensed under the ISC License.

## Contact

Sai Vinay - your.email@example.com

Project Link: https://github.com/sai-vinay-07/websocket
