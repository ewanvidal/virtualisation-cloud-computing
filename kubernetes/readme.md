# Kubernetes Setup - Calculator Project

This document describes the files needed to deploy and manage the calculator application on Kubernetes. It also includes commands to apply, observe and delete resources in Kubernetes.

## File Objectives

### 1. **`frontend.yaml`**

This file defines a **ReplicaSet** and a **Service** for the frontend of the application. The ReplicaSet ensures that multiple replicas of your frontend application are deployed and maintained, and the Service exposes the frontend within the cluster.

### 2. **`api.yaml`**

This file defines a **ReplicaSet** and a **Service** for the backend of the application. Similar to the frontend, the ReplicaSet ensures that multiple replicas of the backend are maintained, and the Service exposes the backend within the Kubernetes cluster.

### 3. **`redis.yaml`**

This file creates a **ReplicaSet** and a **Service** for Redis. Redis is used as an in-memory cache or database to store calculations. The Service allows other services to connect to Redis within the cluster.

### 4. **`rabbitmq.yaml`**

This file defines a **ReplicaSet** and a **Service** for RabbitMQ. RabbitMQ is used as a messaging server for communication between microservices. The Service allows other services to communicate with RabbitMQ.

### 5. **`ingress.yaml`**

This file creates an **Ingress** to expose the frontend and backend services outside the Kubernetes cluster via a specific domain name. The Ingress configures routing rules so that users can access the application through the configured URL.

## Commands to Apply the Files

After preparing the YAML files, you can apply the Kubernetes resources with the following commands:

### Apply the files

```bash
# In the "kubernetes" directory
make frontend
make api
make redis
make rabbitmq
make consumer

kubectl apply -f ingress.yaml -n vidal-guillot
```

### To delete everything

```bash
# In the "kubernetes" directory
make delete-all
```

### To see the pods

```bash
make get-pods
```

### To see the services

```bash
make get-services
```

### To see the replicasets

```bash
make get-replicasets
```
