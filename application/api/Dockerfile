FROM python:3.8-slim

WORKDIR /app

RUN apt-get update && apt-get install -y curl

# Install the required packages from requirements.txt
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY helloApi.py /app

CMD ["python", "-u", "./helloApi.py"]