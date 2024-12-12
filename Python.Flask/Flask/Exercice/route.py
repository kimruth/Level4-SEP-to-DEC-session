from flask import Blueprint, render_template, request, flash, redirect
from .models import SERVICES

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return render_template('home.html')

@main.route('/about_us')
def about_us():
    return render_template('about.html')

@main.route('/services')
def services():
    return render_template('services.html', services=SERVICES)

@main.route('/contact_us', methods=['GET', 'POST'])
def contact_us():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        flash("Thank you for reaching out! We'll get back to you soon.", "success")
        return redirect('/contact_us')
    return render_template('contact.html')