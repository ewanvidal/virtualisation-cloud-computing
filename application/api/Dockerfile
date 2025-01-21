FROM python:3.8-slim

WORKDIR /app

COPY helloApi.py /app

RUN apt update && apt full-upgrade -y

RUN pip install --upgrade pip

RUN pip3 install --upgrade pip

RUN pip install flask

CMD ["python", "./helloApi.py"]