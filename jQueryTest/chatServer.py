from flask import Flask, render_template
from flask_socketio import SocketIO, emit, send

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def test():
    return render_template('test.html')

@socketio.on('msg')
def message(data):
    emit("rectMsg", data)


if __name__ == '__main__':
    socketio.run(app)