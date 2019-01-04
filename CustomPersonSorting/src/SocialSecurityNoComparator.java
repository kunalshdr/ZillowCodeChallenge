import java.util.Comparator;

// this comparator assumes SSNs have to be sorted in numerical order;
// hence the SSNs are first converted to Longs and then compared
public class SocialSecurityNoComparator implements Comparator<Person> {
    @Override
    public int compare(Person p1, Person p2) {
        String pattern = "\\D";

        // remove dashes from ssn and convert the result to Long
        Long ssn1 = Long.parseLong(p1.getSsn().replaceAll(pattern, ""));
        Long ssn2 = Long.parseLong(p2.getSsn().replaceAll(pattern, ""));

        return ssn1.compareTo(ssn2);
    }
}
