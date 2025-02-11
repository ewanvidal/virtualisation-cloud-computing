NAMESPACE=vidal-guillot
DEV=./dev
DEV_NAME=dev
PROD=./prod


# Apply all resources (dev)
dev-apply:
	kubectl delete rs frontend-$(DEV_NAME) -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc frontend-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs api-$(DEV_NAME)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc api-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs consumer-$(DEV_NAME)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs rabbitmq-$(DEV_NAME)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc rabbitmq-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs redis-$(DEV_NAME)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc redis-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(DEV)/frontend-dev.yaml -n $(NAMESPACE)
	kubectl apply -f $(DEV)/api-dev.yaml -n $(NAMESPACE)
	kubectl apply -f $(DEV)/consumer-dev.yaml -n $(NAMESPACE)
	kubectl apply -f $(DEV)/rabbitmq-dev.yaml -n $(NAMESPACE)
	kubectl apply -f $(DEV)/redis-dev.yaml -n $(NAMESPACE)

# Apply all resources (prod)
prod-apply:
	kubectl delete rs frontend -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc frontend-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs api-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc api-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs consumer-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs rabbitmq-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc rabbitmq-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs redis-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc redis-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(PROD)/frontend.yaml -n $(NAMESPACE)
	kubectl apply -f $(PROD)/api.yaml -n $(NAMESPACE)
	kubectl apply -f $(PROD)/consumer.yaml -n $(NAMESPACE)
	kubectl apply -f $(PROD)/rabbitmq.yaml -n $(NAMESPACE)
	kubectl apply -f $(PROD)/redis.yaml -n $(NAMESPACE)


# Apply all resources separately (dev)
frontend-dev:
	kubectl delete rs frontend-$(DEV_NAME) -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc frontend-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(DEV)/frontend-dev.yaml -n $(NAMESPACE)

api-dev:
	kubectl delete rs api-$(DDEV_NAMEEV)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc api-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(DEV)/api-dev.yaml -n $(NAMESPACE)

consumer-dev:
	kubectl delete rs consumer-$(DEV_NAME)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(DEV)/consumer-dev.yaml -n $(NAMESPACE)

rabbitmq-dev:
	kubectl delete rs rabbitmq-$(DEV_NAME)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc rabbitmq-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(DEV)/rabbitmq-dev.yaml -n $(NAMESPACE)

redis-dev:
	kubectl delete rs redis-$(DEV_NAME)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc redis-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(DEV)/redis-dev.yaml -n $(NAMESPACE)

# Apply all resources separately (prod)
frontend:
	kubectl delete rs frontend -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc frontend-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(PROD)/frontend.yaml -n $(NAMESPACE)

api:
	kubectl delete rs api-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc api-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(PROD)/api.yaml -n $(NAMESPACE)

consumer:
	kubectl delete rs consumer-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(PROD)/consumer.yaml -n $(NAMESPACE)

rabbitmq:
	kubectl delete rs rabbitmq-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc rabbitmq-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(PROD)/rabbitmq.yaml -n $(NAMESPACE)

redis:
	kubectl delete rs redis-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc redis-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f $(PROD)/redis.yaml -n $(NAMESPACE)

# See all resources
get-pods:
	kubectl get pods -n $(NAMESPACE)

get-services:
	kubectl get svc -n $(NAMESPACE)

get-replicasets:
	kubectl get rs -n $(NAMESPACE)
# Delete all resources
delete-all:
	kubectl delete rs frontend -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc frontend-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs api-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc api-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs consumer-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs rabbitmq-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc rabbitmq-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs redis-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc redis-service -n $(NAMESPACE) --ignore-not-found

# Delete all resources (dev)
delete-all-dev:
	kubectl delete rs frontend-$(DEV_NAME) -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc frontend-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs api-$(DEV_NAME)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc api-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs consumer-$(DEV_NAME)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs rabbitmq-$(DEV_NAME)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc rabbitmq-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs redis-$(DEV_NAME)-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc redis-$(DEV_NAME)-service -n $(NAMESPACE) --ignore-not-found

# Delete all resources (prod)
delete-all-prod:
	kubectl delete rs frontend -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc frontend-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs api-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc api-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs consumer-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs rabbitmq-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc rabbitmq-service -n $(NAMESPACE) --ignore-not-found
	kubectl delete rs redis-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc redis-service -n $(NAMESPACE) --ignore-not-found