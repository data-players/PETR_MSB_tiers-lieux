path-cron = $(shell pwd)/compact-cron.sh

build:
	docker-compose build --no-cache

start: 
	docker-compose up -d --force-recreate

stop: 
	docker-compose down

logs:
	docker-compose logs -f

compact: 
	docker-compose down && docker-compose up fuseki_compact && docker-compose up -d

set-compact-cron: 
	(crontab -l 2>/local/null; echo "0 4 * * * $(path-cron) >> /tmp/cronlog.txt") | crontab -

prune-data:
	sudo rm -rf ./data