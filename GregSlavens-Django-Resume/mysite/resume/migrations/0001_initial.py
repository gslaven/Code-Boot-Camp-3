# Generated by Django 2.0.5 on 2018-05-18 14:22

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import resume.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(max_length=128)),
                ('city', models.CharField(max_length=64)),
                ('state', models.CharField(max_length=2)),
                ('zip_code', models.TextField(max_length=10)),
                ('updated_at', resume.models.AutoDateTimeField(default=django.utils.timezone.now)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256, unique=True)),
                ('desc', models.TextField(blank=True)),
                ('email', models.EmailField(blank=True, max_length=256)),
                ('website', models.CharField(blank=True, max_length=256)),
                ('updated_at', resume.models.AutoDateTimeField(default=django.utils.timezone.now)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('address', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='resume.Address')),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('desc', models.TextField(blank=True)),
                ('start', models.DateField()),
                ('end', models.DateField()),
                ('updated_at', resume.models.AutoDateTimeField(default=django.utils.timezone.now)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resume.Company')),
            ],
        ),
        migrations.CreateModel(
            name='Phone',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Country_code', models.CharField(default='1', max_length=2)),
                ('area_code', models.CharField(max_length=3)),
                ('prefix', models.CharField(max_length=3)),
                ('suffix', models.CharField(max_length=4)),
                ('updated_at', resume.models.AutoDateTimeField(default=django.utils.timezone.now)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Reference',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('email', models.EmailField(blank=True, max_length=256)),
                ('website', models.CharField(blank=True, max_length=256)),
                ('updated_at', resume.models.AutoDateTimeField(default=django.utils.timezone.now)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('address', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='resume.Address')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resume.Company')),
                ('phone', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='resume.Phone')),
            ],
        ),
        migrations.CreateModel(
            name='Relation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256, unique=True)),
                ('desc', models.TextField(blank=True)),
                ('updated_at', resume.models.AutoDateTimeField(default=django.utils.timezone.now)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='School',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('start', models.DateField()),
                ('end', models.DateField()),
                ('degree', models.CharField(choices=[('AD', 'Associates Degree'), ('BD', 'Bachelors Degree'), ('MD', 'Masters Degree'), ('DD', 'Doctoral Degree')], default='BD', max_length=2)),
                ('major', models.CharField(default='Business Administration', max_length=256)),
                ('focus', models.CharField(default='General Business', max_length=256)),
                ('updated_at', resume.models.AutoDateTimeField(default=django.utils.timezone.now)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256, unique=True)),
                ('desc', models.TextField(blank=True)),
                ('years', models.IntegerField()),
                ('years_modifier', models.CharField(blank=True, max_length=2)),
                ('updated_at', resume.models.AutoDateTimeField(default=django.utils.timezone.now)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='school',
            unique_together={('name', 'degree', 'major')},
        ),
        migrations.AddField(
            model_name='reference',
            name='relation',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='resume.Relation'),
        ),
        migrations.AlterUniqueTogether(
            name='phone',
            unique_together={('area_code', 'prefix', 'suffix')},
        ),
        migrations.AddField(
            model_name='job',
            name='skill',
            field=models.ManyToManyField(blank=True, to='resume.Skill'),
        ),
        migrations.AddField(
            model_name='company',
            name='phone',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='resume.Phone'),
        ),
        migrations.AlterUniqueTogether(
            name='address',
            unique_together={('street', 'zip_code')},
        ),
        migrations.AlterUniqueTogether(
            name='reference',
            unique_together={('name', 'company')},
        ),
        migrations.AlterUniqueTogether(
            name='job',
            unique_together={('title', 'company')},
        ),
    ]