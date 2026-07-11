const fieldAliases = {
  Name: [
    "name",
    "full name",
    "customer name",
    "lead name",
    "client name",
  ],

  Email: [
    "email",
    "mail",
    "email id",
    "email address",
  ],

  Phone: [
    "phone",
    "mobile",
    "mobile number",
    "phone number",
    "contact",
    "cell",
  ],

  Company: [
    "company",
    "company name",
    "organization",
  ],

  City: [
    "city",
    "town",
  ],

  State: [
    "state",
    "province",
  ],

  Country: [
    "country",
    "nation",
  ],

  "Job Title": [
    "designation",
    "job title",
    "role",
    "position",
  ],

  Source: [
    "source",
    "lead source",
    "campaign",
  ],
};

export default function autoMapColumns(headers) {
  const mapping = {};

  headers.forEach((header) => {
    const normalized = header.trim().toLowerCase();

    let matchedField = "";

    for (const crmField in fieldAliases) {
      if (
        fieldAliases[crmField].includes(normalized)
      ) {
        matchedField = crmField;
        break;
      }
    }

    mapping[header] = matchedField;
  });

  return mapping;
}