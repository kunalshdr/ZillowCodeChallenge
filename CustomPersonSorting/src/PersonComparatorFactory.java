import java.util.Comparator;

class PersonComparatorFactory {
    public Comparator<Person> getPersonComparator(String sortField, boolean isAscending) {
        Comparator<Person> personComparator = null;

        switch (SortFields.findFieldByName(sortField)) {
            case SOCIAL_SECURITY_NO:
                personComparator = new SocialSecurityNoComparator();
                break;
            case DATE_OF_BIRTH:
                personComparator = new DateOfBirthComparator();
                break;
            case FIRST_NAME:
                personComparator = new FirstNameComparator();
                break;
            case LAST_NAME:
                personComparator = new LastNameComparator();
                break;
            case HEIGHT_INCHES:
                personComparator = new HeightComparator();
                break;
            case WEIGHT_LBS:
                personComparator = new WeightComparator();
                break;
        }

        // in case of invalid sortFields, avoid the reverse check which would cause NullPointerException
        if (personComparator != null && !isAscending) {
            personComparator = personComparator.reversed();
        }

        return personComparator;
    }
}
