from django.db import models
from datetime import datetime
from django.utils  import timezone

class AutoDateTimeField(models.DateTimeField):
    def pre_save(self, model_instance, add):
        return datetime.now()

class Address(models.Model):
    street = models.CharField(max_length=128)
    city = models.CharField(max_length=64)
    state = models.CharField(max_length=2)
    zip_code = models.TextField(max_length=10)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.street + ', ' + self.city + ', ' + self.state + ',  ' + self.zip_code
    
    class Meta:
        unique_together = ('street', 'zip_code')


class Phone(models.Model):
    Country_code = models.CharField(max_length=2, default="1")
    area_code = models.CharField(max_length=3)
    prefix = models.CharField(max_length=3)
    suffix = models.CharField(max_length=4)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.Country_code + '* (' + self.area_code + ') ' + self.prefix + '-' + self.suffix

    class Meta:
        unique_together = ('area_code', 'prefix', 'suffix')


class Company(models.Model):
    name = models.CharField(max_length=256, unique=True)
    desc = models.TextField(blank=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, blank=True)
    phone = models.ForeignKey(Phone, on_delete=models.CASCADE, blank=True)
    email = models.EmailField(max_length=256, blank=True)
    website = models.CharField(max_length=256, blank=True)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
        
        
class Skill(models.Model):
    name = models.CharField(max_length=256, unique=True)
    desc = models.TextField(blank=True)
    years = models.IntegerField()
    years_modifier = models.CharField(max_length=2, blank=True)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
        
        
class Job(models.Model):
    title = models.CharField(max_length=256)
    desc = models.TextField(blank=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    start = models.DateField()
    end = models.DateField()
    skill = models.ManyToManyField(Skill, blank=True)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title


    class Meta:
        unique_together = ('title', 'company')


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
    
    class Meta:
        unique_together = ('name', 'degree', 'major')


class Relation(models.Model):
    name = models.CharField(max_length=256, unique=True)
    desc = models.TextField(blank=True)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name


class Reference(models.Model):
    name = models.CharField(max_length=256)
    relation = models.ForeignKey(Relation, on_delete=models.CASCADE, blank=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, blank=True)
    phone = models.ForeignKey(Phone, on_delete=models.CASCADE, blank=True)
    email = models.EmailField(max_length=256, blank=True)
    website = models.CharField(max_length=256, blank=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    updated_at = AutoDateTimeField(default=timezone.now)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name + ' from ' + self.company.name


    class Meta:
        unique_together = ('name', 'company')


