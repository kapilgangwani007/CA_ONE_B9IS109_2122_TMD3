pip install -r requirements.txt
gcloud config set project task-management-355621
gcloud app deploy index.yaml

set GOOGLE_APPLICATION_CREDENTIALS=taskkey.json




py  -m venv env

.\env\Scripts\activate

python main.py


background-image: url("/static/bg.jpeg");
