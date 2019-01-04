import sun.security.pkcs.ParsingException;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class PersonSorter {

    PersonComparatorFactory personComparatorFactory;
    DateTimeFormatter dateFormatter;
    PersonSorter() {
        personComparatorFactory = new PersonComparatorFactory();
        dateFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
    }

    // Ideally exception handling should be done in the code iteslf but not handling any excpetions
    // in my code to keep it less verbose and letting JVM handle the exceptions for this exercise
    public static void main(String[] args) throws IOException, ParseException, IllegalArgumentException {
        PersonSorter personSorter = new PersonSorter();
        BufferedWriter writer = new BufferedWriter(new FileWriter(new File("output.txt")));

        // Case 1: Sort by SSN in ascending order
        Iterable<Person> persons = personSorter.getListOfPersons();
        List<Person> sortedPersonList = personSorter.sort(persons, "ssn", true);
        writer.write("Case 1: Sort by SSN in Ascending order\n");
        personSorter.writeResultToFile(sortedPersonList, writer);

        // Case 2: Sort by SSN in descending order
        persons = personSorter.getListOfPersons();
        sortedPersonList = personSorter.sort(persons, "ssn", false);
        writer.write("Case 2: Sort by SSN in Descending order\n");
        personSorter.writeResultToFile(sortedPersonList, writer);

        // Case 3: Sort by last name in ascending order
        persons = personSorter.getListOfPersons();
        sortedPersonList = personSorter.sort(persons, "lastName", true);
        writer.write("Case 3: Sort by Last Name in Ascending order\n");
        personSorter.writeResultToFile(sortedPersonList, writer);

        // Case 4: Sort by first name in descending order
        persons = personSorter.getListOfPersons();
        sortedPersonList = personSorter.sort(persons, "firstName", false);
        writer.write("Case 4: Sort by First Name in Descending order\n");
        personSorter.writeResultToFile(sortedPersonList, writer);

        // Case 5: Sort by height in descending order
        persons = personSorter.getListOfPersons();
        sortedPersonList = personSorter.sort(persons, "height", false);
        writer.write("Case 5: Sort by Height in Descending order\n");
        personSorter.writeResultToFile(sortedPersonList, writer);

        // Case 6: Sort by weight in ascending order
        persons = personSorter.getListOfPersons();
        sortedPersonList = personSorter.sort(persons, "weight", true);
        writer.write("Case 6: Sort by Weight in Ascending order\n");
        personSorter.writeResultToFile(sortedPersonList, writer);

        // Case 7: Sort by DOB in ascending order
        persons = personSorter.getListOfPersons();
        sortedPersonList = personSorter.sort(persons, "dob", true);
        writer.write("Case 7: Sort by DOB in Ascending order\n");
        personSorter.writeResultToFile(sortedPersonList, writer);

        // Case 8: Sort by DOB in descending order
        persons = personSorter.getListOfPersons();
        sortedPersonList = personSorter.sort(persons, "dob", false);
        writer.write("Case 8: Sort by DOB in Descending order\n");
        personSorter.writeResultToFile(sortedPersonList, writer);

        // Case 9: Sort by first name in ascending order
        persons = personSorter.getListOfPersons();
        sortedPersonList = personSorter.sort(persons, "firstName", true);
        writer.write("Case 9: Sort by First Name in Ascending order\n");
        personSorter.writeResultToFile(sortedPersonList, writer);

        // Case 10: Sort by height in ascending order
        persons = personSorter.getListOfPersons();
        sortedPersonList = personSorter.sort(persons, "height", true);
        writer.write("Case 10: Sort by Height in Ascending order\n");
        personSorter.writeResultToFile(sortedPersonList, writer);

        writer.close();
    }

    private List<Person> sort(Iterable<Person> persons, String sortField, boolean isAscending) throws IllegalArgumentException {

        // 1. make sure valid sort field is provided
        // 2. make sure persons list is not null
        validateInputs(persons, sortField);

        // Collect all the persons in a list for sorting
        List<Person> personList = new ArrayList<>();
        for (Person person : persons) {
            personList.add(person);
        }

        // Get the appropriate comparator using the Factory pattern
        Comparator<Person> personComparator = personComparatorFactory.getPersonComparator(sortField, isAscending);
        if (personComparator == null) {
            throw new IllegalArgumentException("No valid comparator");
        }

        Collections.sort(personList, personComparator);

        return personList;
    }

    // this method does basic input validations and can be extended to add more validations as needed
    private void validateInputs(Iterable<Person> persons, String sortField) {
        if (persons == null) {
            throw new IllegalArgumentException("Persons list is null. Terminating program.");
        }

        if (!isSortFieldValid(sortField)) {
            throw new IllegalArgumentException("Sort field provided is invalid.");
        }
    }

    private boolean isSortFieldValid(String sortField) {
        return  sortField.equalsIgnoreCase("ssn") ||
                sortField.equalsIgnoreCase("dob") ||
                sortField.equalsIgnoreCase("height") ||
                sortField.equalsIgnoreCase("weight") ||
                sortField.equalsIgnoreCase("lastName") ||
                sortField.equalsIgnoreCase("firstName");
    }

    // write output of a particular case to file
    // output of all the cases are appended together
    private void writeResultToFile(List<Person> persons, BufferedWriter writer) throws IOException, ParseException {
        if (persons.size() <= 0) {
            writer.write("No person found!!! ");
            writer.newLine();
            return;
        }

        for (Person p : persons) {
            String personStr = getStringReprsentationOfPerson(p);
            writer.write(personStr);
            writer.newLine();
        }

        writer.newLine();
        writer.newLine();
    }

    private String getStringReprsentationOfPerson(Person p) throws ParseException {
        return "Person { SSN  = " + p.getSsn() + ", Date of Birth = " + p.getDateOfBirth().format(dateFormatter) +
                ", First Name = " + p.getFirstName() + ", Last Name = " + p.getLastName() + ", Height (in inches) " +
                p.getHeightIn() + ", Weight (in lbs) = " + p.getWeigthLb() + " }";
    }

    private Iterable<Person> getListOfPersons() {
        List<Person> persons = new ArrayList<>();

        // this list will be created each time a new test case is being run
        persons.add(new Person("123-345-6175",       LocalDate.of(1990, 11, 4),  "Ryan",        "Rey",     60.71, 180.24));
        persons.add(new Person("   213-456-1234   ", LocalDate.of(1988, 9, 4),   "   Jennifer", "Lo",      56.12, 150.19));
        persons.add(new Person("453-122-1245   ",    LocalDate.of(1988, 11, 4),  "Celine   ",   "Dion",    60.41, 161.45));
        persons.add(new Person("213-455-1234",       LocalDate.of(1985, 6, 4),   "Jennifer",    "  Ann  ", 65.17, 134.50));
        persons.add(new Person("   213-456-1238",    LocalDate.of(1990, 11, 9),  "Jennifer",    "  Law",   59.24, 134.51));
        persons.add(new Person("312-573-1571",       LocalDate.of(1991, 2, 1),   "   Greg",     "Smith",   40.61, 140.56));

        // sanitize the inputs
        sanitizePersonList(persons);

        return persons;
    }

    // this method only removes the leading and trailing spaces for now
    // and can be extended for more sanitization rules
    private void sanitizePersonList(List<Person> persons) {
        for (Person p : persons) {
            p.setFirstName(p.getFirstName().trim());
            p.setLastName(p.getLastName().trim());
            p.setSsn(p.getSsn().trim());
        }
    }
}
