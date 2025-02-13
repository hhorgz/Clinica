# REQUIREMENTS
* django

## HOWTO Install requirements
```shell
pip install requirements.txt
```

# START THE PROJECT
```shell
cd techmed_backend
python manage.py runserver
```

# MIGRATIONS

## WORKFLOW

### GENERATE MIGRATION FILES
This command will generate migration files
```shell
python manage.py makemigrations
```

### MIGRATE
This will actually apply the changes made in migration files into the database
```shell
python manage.py 
```

## REVERSE MIGRATIONS WORKFLOW
Do you want to start with fresh models? First you need to revert migration changes in DB
```bash
python manage.py migrate clinic zero
```

### DUMPDATA *(Optional)*
If you want to backup your app data
```bash
python manage.py dumpdata clinic -o <fixture_dir>/<your_dump_file>.json.gz
```

### LOAD DATA *(Optional)*
```bash
python manage.py loaddata <fixture_dir>/<your_dump_file>
```