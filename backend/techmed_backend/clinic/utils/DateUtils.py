from datetime import datetime

DATE_FORMAT = '%Y-%m-%d'

def calculateAge(birthDate, dateFormat=DATE_FORMAT):
    birthDate = datetime.strptime(birthDate, dateFormat)
    today = datetime.now()

    age = today.year - birthDate.year - ((today.month, today.day) < (birthDate.month, birthDate.day))
    return age