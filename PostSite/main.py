import google.oauth2.id_token
from flask import Flask, render_template, request, redirect, session, url_for
from google.auth.transport import requests
from google.cloud import datastore


app = Flask(__name__,template_folder='templates')
datastore_client = datastore.Client()
firebase_request_adapter = requests.Request()

# Create UserInfo
def createUserInfo(claims, username):
    entity_Key = datastore_client.key('UserInfo', claims['email'])
    entity = datastore.Entity(key = entity_Key)
    entity.update({
        'email': claims['email'],
        'name': "",
        'username': username,
        'bio': "",
        'tweet_List': [],
        'following_List': [],
        'follower_List': []  
    })
    datastore_client.put(entity)



if __name__ == '__main__':
   app.run(host='127.0.0.1', port=8080, debug=True)