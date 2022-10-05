default: help

.PHONY: help build start stop test test-watch clean

help: ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

IMAGE_TAG = cpx-components:dev

build: ## Build the cpx-components test image
	podman build -t $(IMAGE_TAG) -f Containerfile.test .
	@mkdir -p node_modules
	podman create --name node_modules_copy $(IMAGE_TAG)
	podman cp node_modules_copy:/usr/src/app/node_modules .
	podman rm node_modules_copy

CONTAINER_NAME = cpx-components_dev

start: ## Run the dev service
	podman run -d \
		-v ./:/usr/src/app \
		-v NodeModules:/usr/src/app/node_modules \
		-p 8080:8080 \
		--name $(CONTAINER_NAME) $(IMAGE_TAG)
	podman ps

stop: ## Stop and remove the service container
	podman stop $(CONTAINER_NAME)
	podman rm $(CONTAINER_NAME)

npm: ## Exec `npm install` in the container and copy out files
	podman exec -u 0 $(CONTAINER_NAME) npm install
	podman cp $(CONTAINER_NAME):/usr/src/app/node_modules .

build-components: ## Build components
	podman exec -u 0 $(CONTAINER_NAME) deno task build

test: ## Exec `deno task test` in the container
	podman exec $(CONTAINER_NAME) deno task test

test-watch: ## Exec `deno task test:watch` in the container
	podman exec -it $(CONTAINER_NAME) deno task test:watch

clean:
	podman rmi $(IMAGE_TAG)
