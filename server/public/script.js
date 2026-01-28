const socket = io();

let mySocketId = '';
const msgForm = document.getElementById('msg-form');
const msgInput = document.getElementById('msg-input');
const nameInput = document.getElementById('name-input');
const msgContainer = document.getElementById('msg-container');
const feedback = document.getElementById('feedback');

// update user count
socket.on('client-count', (count) => {
  document.getElementById('client-count').innerText = count;
});

socket.on('connect', () => {
  mySocketId = socket.id;
});

// send message
msgForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const message = msgInput.value.trim();
  const name = nameInput.value.trim();

  if (!message) return;

  socket.emit('msg', {
    name,
    message,
    time: new Date().toLocaleTimeString()
  });

  msgInput.value = '';
  socket.emit('stop-typing');
});

// receive message
socket.on('msg', (data) => {
  const li = document.createElement('li');

  if (data.senderId === mySocketId) {
    li.classList.add('right-msg');
  } else {
    li.classList.add('left-msg');
  }

  li.innerHTML = `
    <p class="msg">
      ${data.message}
      <span>${data.name} · ${data.time}</span>
    </p>
  `;

  msgContainer.appendChild(li);
  msgContainer.scrollTop = msgContainer.scrollHeight;
});


// typing indicator
const typingBox = document.getElementById('typing-box');
typingBox.style.display = 'none';

socket.on('typing', (name) => {
  feedback.innerText = `${name} is typing...`;
  typingBox.style.display = 'block';
  msgContainer.scrollTop = msgContainer.scrollHeight;
});

socket.on('stop-typing', () => {
  feedback.innerText = '';
  typingBox.style.display = 'none';
});
