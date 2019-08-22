import os

from flask import Flask
app=Flask(__name__)

@app.route('/hello/<name>')
def hello_world(name):
    return 'Hello World! %d' % os.urandom(24)

@app.route('/')
def hello_world2():
    return 'Hello World! %s' % os.urandom(24)

#when we access 127.0.0.1:5000(default) we can start the server
if __name__ == '__main__':
    app.run()