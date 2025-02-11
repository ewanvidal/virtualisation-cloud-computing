from flask import Flask, request, jsonify
import pika
import redis
import uuid
import json
import os

app = Flask(__name__)

ENV = os.getenv("ENV", "production")

if ENV == "development":
    REDIS_HOST = "redis-dev-service"
    RABBITMQ_HOST = "rabbitmq-dev-service"
    print("[API] Development environment")
else:
    REDIS_HOST = "redis-service"
    RABBITMQ_HOST = "rabbitmq-service"
    print("[API] Production environment")
    
redis_client = redis.Redis(host=REDIS_HOST, port=6379, decode_responses=True)


# RabbitMQ configuration

def send_to_queue(calculation):
    """Send a message to the queue 'calculation' of RabbitMQ."""
    try:
        connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
        channel = connection.channel()
        channel.queue_declare(queue="calculation")
        channel.basic_publish(exchange="", routing_key="calculation", body=json.dumps(calculation))
        connection.close()
        print(f"[API] Calculation sent to rabbitMQ : {calculation}")
    except Exception as e:
        print(f"[API] Error when sending the calculation to rabbitMQ: {e}")

@app.route("/api/send", methods=["POST"])
def send_calculation():
    """ Receive a calculation in Json from the frontend and send it to rabbitMQ """
    data = request.json
    calculation = data.get("calculation")
    
    # generate a unique id for the message
    calc_id = str(uuid.uuid4())
    calculation = {"id": calc_id, "calculation": calculation}

    send_to_queue(calculation)
    return jsonify({"id": calc_id}), 200

@app.route("/api/result/<calc_id>", methods=["GET"])
def get_result(calc_id):
    result = redis_client.get(calc_id)
    if result:
        return jsonify({'id': calc_id, 'result': result}), 200
    else:
        return jsonify({'error': 'Résultat non trouvé'}), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)