FROM python:3.10

WORKDIR /app

# Install the required packages from requirements.txt
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Run the consumer.py script with -u flag to disable output buffering then when a print statement is executed, the output will be immediately displayed in the console
CMD ["python", "-u", "consumer.py"]
