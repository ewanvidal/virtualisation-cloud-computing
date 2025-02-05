# Project Variables
PROJECT_ID=polytech-dijon
DOCKER_REGISTRY=europe-west1-docker.pkg.dev/$(PROJECT_ID)/polytech-dijon
DOCKER_IMAGE_PREFIX=vidal-guillot
DOCKER_TAG=latest
DOCKERFILES_LOCATIONS=api frontend/calculator consumer

# Connection to GCP and Docker Registry
init:
	@gcloud auth login
	@gcloud config set project $(PROJECT_ID)
	@gcloud auth configure-docker europe-west1-docker.pkg.dev

# Build all images from Dockerfiles
build-images:
	$(foreach dir, $(DOCKERFILES_LOCATIONS), \
		docker build -t $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir)):$(DOCKER_TAG) ./$(dir); \
	)

# Push all images to the Docker Registry
push-images:
	$(foreach dir, $(DOCKERFILES_LOCATIONS), \
		docker push $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir)):$(DOCKER_TAG); \
	)

# Scan all images with Trivy
trivy:
	$(foreach dir, $(DOCKERFILES_LOCATIONS), \
		trivy image $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir)):$(DOCKER_TAG); \
	)
