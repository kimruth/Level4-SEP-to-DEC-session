from flask import Flask, request, render_template, flash, redirect, url_for

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.secret_key = 'dfghjkl'

# MYSQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:matricule@localhost/flask_level4_db'
app.config['SQLALCHEMY_TRACK_MODICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    
    def __repr__(self): # Cette fonction permet de donner une definition a la classe 'user' et gerer plus facilement les erreurs.
        return f'<User {self.username}>'
    
    
# EXAMPLE OF CRUD FUNCTIONS
def create_user(username, email):
    new_user = User(username=username, email=email)
    db.session.commit(new_user)
    db.session.commit()
    
def get_all_users():
    return User.query.all()

def get_user_by_id(user_id):
    return User.query.get(user_id)

def update_username_by_id(user_id, new_username):
    # user = get_user_by_id(user_id)
    # user.username = new_username
    user = User.query.get(user_id)
    if user:
        user.username = new_username
        db.session.commit()
        
def delete_user_by_id(user_id):
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
    
# END
# --------

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/contact", methods=['GET', 'POST'])
def contact():
    if request.method == "GET":
        return render_template("contact.html")
    name = request.form.get("name")
    subject = request.form.get("subject")
    content = request.form.get("content")
    
    if not name or not subject or not content:
        
        flash("Provide all fields!", "error")
        return redirect(url_for("contact"))
    
    flash("Success !!! All fields submited!", "success")
    return redirect(url_for("contact"))

@app.route("/about")
def about():
    return "This is the about page."

# Dynamic route
@app.route("/blog/article/<id>")
def article(id):
    return f"Id is: {id}"

# Route with Queries
@app.route("/account")
def account():
    if "version" in request.args:
        version = request.args.get("version")
        return f"The version is: {version}"
    else:
        return "Please send the version."
    
# Use another method HTTP Verbs
@app.route("/submit", methods=['GET', 'POST'])
def submit():
    method = request.method
    if method == 'GET':
        return "User call with GET"
    elif method == 'POST':
        return "User call with POST"

if __name__ == '__name__':
    app.run(debug=True) # sert a activer le mode debug directement dans le navigateur.