import os
import pika
import redis
import json

# Gather environment variables
redis_host = os.getenv('REDIS_HOST', 'localhost')
rabbitmq_host = os.getenv('RABBITMQ_HOST', 'localhost')

# Connection to Redis
try:
    redis_client = redis.Redis(host=redis_host, port=6379, decode_responses=True)
    redis_client.ping()
    print("[Consumer] Connection to Redis successful")
except redis.ConnectionError:
    print("[Consumer] Error when connecting to Redis")

# Connection to RabbitMQ
try:
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=rabbitmq_host))
    channel = connection.channel()
    channel.queue_declare(queue='calculation')
    print("[Consumer] Connection to RabbitMQ successful")
except pika.exceptions.AMQPConnectionError:
    print("[Consumer] Error when connecting to RabbitMQ")

def callback(ch, method, properties, body):
    data = json.loads(body)
    calc_id = data['id']
    caluculation = data['calculation']
    
    try:
        result = eval(caluculation)
    except Exception as e:
        result = f"Erreur: {str(e)}"

    # Store the result in Redis
    redis_client.set(calc_id, result)   
    print(f"Calcul {caluculation} = {result} stocké avec ID {calc_id}")

channel.basic_consume(queue='calculation', on_message_callback=callback, auto_ack=True)

print("[Consumer] Waiting for calculation...")
channel.start_consuming()
print("[Consumer] start_consuming() has been called")