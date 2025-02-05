NAMESPACE=vidal-guillot

# Apply all resources
frontend:
	kubectl delete rs frontend -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc frontend-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f frontend.yaml -n $(NAMESPACE)

api:
	kubectl delete rs api-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc api-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f api.yaml -n $(NAMESPACE)

consumer:
	kubectl delete rs consumer-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f consumer.yaml -n $(NAMESPACE)

rabbitmq:
	kubectl delete rs rabbitmq-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc rabbitmq-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f rabbitmq.yaml -n $(NAMESPACE)

redis:
	kubectl delete rs redis-replicaset -n $(NAMESPACE) --ignore-not-found
	kubectl delete svc redis-service -n $(NAMESPACE) --ignore-not-found
	kubectl apply -f redis.yaml -n $(NAMESPACE)

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