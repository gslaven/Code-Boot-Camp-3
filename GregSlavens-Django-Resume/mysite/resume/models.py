from django.db import models


class Address(models.Model):
    address_id = models.Field(primary_key=True)
    street = models.CharField(max_length=128)
    city = models.CharField(max_length=64)
    state = models.TextField(max_length=64)
    zip_code = models.TextField(max_length=10)


class Phone(models.Model):
    phone_id = models.Field(primary_key=True)
    Country_code = models.CharField(max_length=2, default="1")
    area_code = models.CharField(max_length=3)
    prefix = models.CharField(max_length=3)
    suffix = models.CharField(max_length=4)


class Company(models.Model):
    company_id = models.Field(primary_key=True)
    name = models.CharField(max_length=256)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    company_phone = models.ForeignKey(Phone, on_delete=models.CASCADE)
    company_email = models.EmailField(max_length=256)
    company_website = models.CharField(max_length=256)


class Job(models.Model):
    job_id = models.Field(primary_key=True)
    desc = models.CharField(max_length=256)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    start = models.DateField()
    end = models.DateField()


class School(models.Model):
    school_id = models.Field(primary_key=True)
    name = models.CharField(max_length=256)
    start = models.DateField()
    end = models.DateField()
    ASSOCIATES = 'AD'
    BACHELORS = 'BD'
    MASTERS = 'MD'
    DOCTORATE = 'DD'
    DEGREE_CHOICES = (
        (ASSOCIATES, 'Associates Degree'),
        (BACHELORS, 'Bachelors Degree'),
        (MASTERS, 'Masters Degree'),
        (DOCTORATE, 'Doctoral Degree'),
    )
    degree = models.CharField(
        max_length=2,
        choices=DEGREE_CHOICES,
        default=BACHELORS,
    )
    major = models.CharField(
        max_length=256, default='Business Administration')
    focus = models.CharField(
        max_length=256, default='General Bussiness')
