import com.sun.org.apache.bcel.internal.generic.LoadClass;

import java.time.LocalDate;
import java.util.Date;

class Person {
    private String ssn;
    private LocalDate dateOfBirth;
    private String firstName;
    private String lastName;
    private Double heightIn;
    private Double weigthLb;

    public Person(String ssn, LocalDate dateOfBirth, String firstName, String lastName, Double heightIn, Double weigthLb) {
        this.ssn = ssn;
        this.dateOfBirth = dateOfBirth;
        this.firstName = firstName;
        this.lastName = lastName;
        this.heightIn = heightIn;
        this.weigthLb = weigthLb;
    }

    public String getSsn() {
        return ssn;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Double getHeightIn() {
        return heightIn;
    }

    public void setHeightIn(Double heightIn) {
        this.heightIn = heightIn;
    }

    public Double getWeigthLb() {
        return weigthLb;
    }

    public void setWeigthLb(Double weigthLb) {
        this.weigthLb = weigthLb;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "Person {" +
                "SSN  = '" + ssn + '\'' +
                ", DOB = " + dateOfBirth +
                ", First Name = '" + firstName + '\'' +
                ", Last Name = '" + lastName + '\'' +
                ", height (inches) = " + heightIn +
                ", weigth (lbs) = " + weigthLb +
                " }";
    }
}
