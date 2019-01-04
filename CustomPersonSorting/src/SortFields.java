public enum SortFields {
    SOCIAL_SECURITY_NO ("ssn"), DATE_OF_BIRTH ("dob"),
    FIRST_NAME ("firstName"), LAST_NAME ("lastName"),
    HEIGHT_INCHES ("height"), WEIGHT_LBS ("weight");

    private final String field;

    SortFields(String field) {
        this.field = field;
    }

    public String getField() {
        return this.field;
    }

    public static SortFields findFieldByName(String field) {
        for (SortFields f : SortFields.values()) {
            if (field.equalsIgnoreCase(f.field)) {
                return f;
            }
        }
        return null;
    }
}
