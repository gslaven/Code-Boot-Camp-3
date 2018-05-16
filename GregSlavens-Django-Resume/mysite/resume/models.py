from django.db import models
from datetime import datetime
from django.utils  import timezone

class AutoDateTimeField(models.DateTimeField):
    def pre_save(self, model_instance, add):
        return datetime.now()

class Address(models.Model):
    street = models.CharField(max_length=128)
    city = models.CharField(max_length=64)
    state = models.TextField(max_length=2)
    zip_code = models.TextField(max_length=10)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.street + ', ' + self.city + ', ' + self.state + ',  ' + self.zip_code

class Phone(models.Model):
    Country_code = models.CharField(max_length=2, default="1")
    area_code = models.CharField(max_length=3)
    prefix = models.CharField(max_length=3)
    suffix = models.CharField(max_length=4)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.Country_code + '* (' + self.area_code + ') ' + self.prefix + '-' + self.suffix

class Company(models.Model):
    name = models.CharField(max_length=256)
    company_address = models.ForeignKey(Address, on_delete=models.CASCADE, blank=True)
    company_phone = models.ForeignKey(Phone, on_delete=models.CASCADE, blank=True)
    company_email = models.EmailField(max_length=256, blank=True)
    company_website = models.CharField(max_length=256, blank=True)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name

class Skill(models.Model):
    skill = models.CharField(max_length=256)
    years = models.IntegerField()
    years_modifier = models.CharField(max_length=2, blank=True)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.skill


class Job(models.Model):
    desc = models.CharField(max_length=256)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    start = models.DateField()
    end = models.DateField()
    skill = models.ManyToManyField(Skill, blank=True)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.desc


class School(models.Model):
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
        max_length=256, default='General Business')
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name


class Reference(models.Model):
    ref_name = models.CharField(max_length=256)
    ref_address = models.ForeignKey(Address, on_delete=models.CASCADE, blank=True)
    ref_phone = models.ForeignKey(Phone, on_delete=models.CASCADE, blank=True)
    ref_email = models.EmailField(max_length=256, blank=True)
    ref_website = models.CharField(max_length=256, blank=True)
    ref_company = models.ForeignKey(Company, on_delete=models.CASCADE)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.ref_name
