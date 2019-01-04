import java.util.Comparator;

public class HeightComparator implements Comparator<Person> {
    @Override
    public int compare(Person p1, Person p2) {
        return p1.getHeightIn().compareTo(p2.getHeightIn());
    }
}
