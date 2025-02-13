start-project : 
	cd application && make build-images && make push-images && cd .. && cd kubernetes && make prod-apply && make dev-apply