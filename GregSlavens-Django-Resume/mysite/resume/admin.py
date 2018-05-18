from django.contrib import admin
from .models import Address
from .models import Company
from .models import Job
from .models import Phone
from .models import Reference
from .models import School
from .models import Skill
from .models import Relation

# Register your models here.
admin.site.register(Address)
admin.site.register(Company)
admin.site.register(Job)
admin.site.register(Phone)
admin.site.register(Reference)
admin.site.register(School)
admin.site.register(Skill)
admin.site.register(Relation)
