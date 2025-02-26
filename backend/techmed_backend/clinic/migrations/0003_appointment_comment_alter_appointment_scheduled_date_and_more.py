# Generated by Django 4.1.4 on 2024-05-03 04:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clinic', '0002_alter_patient_sex'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='comment',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='scheduled_date',
            field=models.DateTimeField(verbose_name='appointment date YYYY-MM-DD HH:mm:ss'),
        ),
        migrations.AlterField(
            model_name='patient',
            name='birth_date',
            field=models.DateField(verbose_name='YYYY-MM-DD'),
        ),
    ]
