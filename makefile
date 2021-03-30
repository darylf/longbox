#DEFAULT variables
ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
DOCKER_COMPOSE := docker-compose
DOCKER_COMPOSE_FILE := $(ROOT_DIR)/docker-compose.yml

check-var-%:
	@: $(if $(value $*),,$(error $* is undefined))

build:| check-var-e
	@${DOCKER_COMPOSE} -p longbox-${e} -f $(DOCKER_COMPOSE_FILE) -f docker-compose-${e}.yml build ${c}

build-%:
	@make build e=$* c=${c}

up:| check-var-e
	@${DOCKER_COMPOSE} -p longbox-${e} -f $(DOCKER_COMPOSE_FILE) -f docker-compose-${e}.yml up -d ${c}

up-%:
	@make up e=$* c=${c}

down:| check-var-e
	@( read -p "Are you sure? [y/N]: " sure && case "$$sure" in [yY]) true;; *) false;; esac )
	@${DOCKER_COMPOSE} -p longbox-${e} -f $(DOCKER_COMPOSE_FILE) -f docker-compose-${e}.yml down ${c}

down-%:
	@make down e=$* c=${c}

start:| check-var-e
	@${DOCKER_COMPOSE} -p longbox-${e} -f $(DOCKER_COMPOSE_FILE) -f docker-compose-${e}.yml start ${c}

start-%:
	@make start e=$* c=${c}

stop:| check-var-e
	@( read -p "Are you sure? [y/N]: " sure && case "$$sure" in [yY]) true;; *) false;; esac )
	@${DOCKER_COMPOSE} -p longbox-${e} -f $(DOCKER_COMPOSE_FILE) -f docker-compose-${e}.yml stop ${c}

stop-%:
	@make stop e=$* c=${c}

status:| check-var-e
	@${DOCKER_COMPOSE} -p longbox-${e} -f $(DOCKER_COMPOSE_FILE) -f docker-compose-${e}.yml ps

status-%:
	@make status e=$* c=${c}

logs:| check-var-e
	@${DOCKER_COMPOSE} -p longbox-${e} -f $(DOCKER_COMPOSE_FILE) -f docker-compose-${e}.yml logs -f ${c}

logs-%:
	@make logs e=$* c=${c}

sh:| check-var-e
	@${DOCKER_COMPOSE} -p longbox-${e} -f $(DOCKER_COMPOSE_FILE) -f docker-compose-${e}.yml run ${c} sh

sh-%:| check-var-c
	@make sh e=$* c=${c}
