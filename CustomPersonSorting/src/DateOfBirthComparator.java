import java.util.Comparator;

public class DateOfBirthComparator implements Comparator<Person> {
    @Override
    public int compare(Person p1, Person p2) {
        return p1.getDateOfBirth().compareTo(p2.getDateOfBirth());
    }
}
