# Generated by Django 2.0.5 on 2018-05-30 19:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0013_resumeowner_github'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='address',
            options={'ordering': ['street']},
        ),
        migrations.AlterModelOptions(
            name='company',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='duty',
            options={'ordering': ['desc']},
        ),
        migrations.AlterModelOptions(
            name='job',
            options={'ordering': ['title']},
        ),
        migrations.AlterModelOptions(
            name='phone',
            options={'ordering': ['area_code', 'prefix', 'suffix']},
        ),
        migrations.AlterModelOptions(
            name='reference',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='relation',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='resumeowner',
            options={'ordering': ['last_name', 'first_name']},
        ),
        migrations.AlterModelOptions(
            name='school',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='skill',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='summary',
            options={'ordering': ['name']},
        ),
    ]