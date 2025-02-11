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
		$(if $(findstring frontend/calculator,$(dir)), \
			docker build -t $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir))-prod:$(DOCKER_TAG) --build-arg REACT_APP_API_URL=http://calculatrice-vidal-guillot-polytech-dijon.kiowy.net ./$(dir); \
			docker build -t $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir))-dev:$(DOCKER_TAG) --build-arg REACT_APP_API_URL=http://calculatrice-dev-vidal-guillot-polytech-dijon.kiowy.net ./$(dir); \
		, \
			docker build -t $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir)):$(DOCKER_TAG) ./$(dir); \
		) \
	)

# Push all images to the Docker Registry
push-images:
	$(foreach dir, $(DOCKERFILES_LOCATIONS), \
		$(if $(findstring frontend/calculator,$(dir)), \
			docker push $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir))-prod:$(DOCKER_TAG); \
			docker push $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir))-dev:$(DOCKER_TAG); \
		, \
			docker push $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir)):$(DOCKER_TAG); \
		) \
	)

# Scan all images with Trivy
trivy:
	$(foreach dir, $(DOCKERFILES_LOCATIONS), \
		$(if $(findstring frontend/calculator,$(dir)), \
			trivy image $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir))-prod:$(DOCKER_TAG); \
			trivy image $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir))-dev:$(DOCKER_TAG); \
		, \
			trivy image $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(notdir $(dir)):$(DOCKER_TAG); \
		) \
	)