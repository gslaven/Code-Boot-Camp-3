=====
Resume
=====

Resume is a simple Django app to display RESUME data from a Django sqlite or (with some work) any other compatible database.

You can add Jobs, Skills, Companies, References, etc... and have a beautiful default (and highly customizeable) way to display them on the web.

Detailed documentation is in the "docs" directory.

Quick start
-----------

1. Add "resume" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'resume',
    ]

2. Include the resume URLconf in your project urls.py like this::

    // FOR A NON-CASE-SENSITIVE PATH
    re_path(r'^(?i)resumes/',include('resume.urls')),

3. Run `python manage.py migrate` to create the resume models.

4. Start the development server and visit http://127.0.0.1:8000/admin/ to create a poll (you'll need the Admin app enabled).

5. Visit http://127.0.0.1:8000/resumes/ to view your resume.