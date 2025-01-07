from flask import Blueprint, render_template, request, url_for, flash, redirect
from models import SERVICES


main_app = Blueprint('main_app', __name__)

@main_app.route('/')
def index():
    return render_template("home.html")

@main_app.route('/about_us')
def about_us():
    return render_template("about_us.html")

@main_app.route('/contact_us', methods=['GET', 'POST'])
def contact_us():
    if request.method == 'POST':
        return render_template("contact_us.html")
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
        
    if not name or not email or not message:
        flash("Please provide all fields!", "error")
        return redirect(url_for('contact_us'))
    flash("Thank you for reaching out! We'll get back to you soon.", "success")

@main_app.route('/services')
def services():
    return render_template("services.html", servicse=SERVICES)