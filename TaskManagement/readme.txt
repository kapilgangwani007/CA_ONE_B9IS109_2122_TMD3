pip install -r requirements.txt
gcloud config set project task-management-355621 // Put your project Id from google cloud
gcloud app deploy index.yaml
set GOOGLE_APPLICATION_CREDENTIALS=taskkey.json // put name of key generated from google cloud
python main.py
