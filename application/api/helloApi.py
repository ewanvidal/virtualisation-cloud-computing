from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'je suis l\'api un peu nulle'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
    