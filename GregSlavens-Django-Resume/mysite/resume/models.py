from django.db import models


class Address(models.Model):
    street = models.CharField(max_length=128)
    city = models.CharField(max_length=64)
    state = models.TextField(max_length=64)
    zip_code = models.TextField(max_length=10)


class Phone(models.Model):
    Country_code = models.CharField(max_length=2, default="1")
    area_code = models.CharField(max_length=3)
    prefix = models.CharField(max_length=3)
    suffix = models.CharField(max_length=4)


class Company(models.Model):
    name = models.CharField(max_length=256)
    company_address = models.ForeignKey(Address, on_delete=models.CASCADE)
    company_phone = models.ForeignKey(Phone, on_delete=models.CASCADE)
    company_email = models.EmailField(max_length=256)
    company_website = models.CharField(max_length=256)
    
    def __str__(self):
        return self.name

class Job(models.Model):
    desc = models.CharField(max_length=256)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    start = models.DateField()
    end = models.DateField()

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


class Skill(models.Model):
    skill = models.CharField(max_length=256)
    years = models.IntegerField()
    years_modifier = models.CharField(max_length=2)
    job = models.ManyToManyField(Job)

    def __str__(self):
        return self.skill


class Reference(models.Model):
    ref_name = models.CharField(max_length=256)
    ref_address = models.ForeignKey(Address, on_delete=models.CASCADE)
    ref_phone = models.ForeignKey(Phone, on_delete=models.CASCADE)
    ref_email = models.EmailField(max_length=256)
    ref_website = models.CharField(max_length=256)
    ref_company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return self.ref_name
