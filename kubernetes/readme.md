# Kubernetes Setup - Projet Calculatrice

Ce document décrit les fichiers nécessaires pour déployer et gérer l'application calculatrice sur Kubernetes. Il inclut également les commandes pour appliquer et supprimer les ressources dans Kubernetes.

## Objectifs des Fichiers

### 1. **`frontend-replicaset.yaml`**

Ce fichier définit un **ReplicaSet** et un **Service** pour le frontend de l'application. Le ReplicaSet permet d'assurer que plusieurs réplicas de votre application frontend soient déployés et maintenus, et le Service permet d'exposer le frontend au sein du cluster.

### 2. **`backend-replicaset.yaml`**

Ce fichier définit un **ReplicaSet** et un **Service** pour le backend de l'application. Comme pour le frontend, le ReplicaSet veille à maintenir plusieurs réplicas du backend et le Service expose le backend au sein du cluster Kubernetes.

### 3. **`redis-replicaset.yaml`**

Ce fichier crée un **ReplicaSet** et un **Service** pour Redis. Redis est utilisé comme un cache ou une base de données en mémoire. Le Service permet à d'autres services de se connecter à Redis dans le cluster.

### 4. **`rabbitmq-replicaset.yaml`**

Ce fichier définit un **ReplicaSet** et un **Service** pour RabbitMQ. RabbitMQ est utilisé comme un serveur de messagerie pour la communication entre les microservices. Le Service permet aux autres services de communiquer avec RabbitMQ.

### 5. **`ingress.yaml`**

Ce fichier crée un **Ingress** pour exposer les services frontend et backend à l'extérieur du cluster Kubernetes via un nom de domaine spécifique. L'Ingress permet de configurer les règles de routage pour que les utilisateurs accèdent à l'application via l'URL configurée.

## Commandes pour Appliquer les Fichiers

Après avoir préparé les fichiers YAML, vous pouvez appliquer les ressources Kubernetes avec les commandes suivantes :

### Appliquer les fichiers

```bash
kubectl apply -f frontend.yaml
kubectl apply -f backend.yaml
kubectl apply -f redis.yaml
kubectl apply -f rabbitmq.yaml
kubectl apply -f ingress.yaml
kubectl apply -f namespace.yaml
```

### Pour tout supprimer

```bash
kubectl delete rs,svc,pods,ingress --all
```