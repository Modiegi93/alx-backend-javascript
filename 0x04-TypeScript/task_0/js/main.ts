interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

  const studentsList: Student[] = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 21,
      location: "New York",
    },
    {
      firstName: "Mathapelo",
      lastName: "Mphahlele",
      age: 29,
      location: "Johannesburg",
    },
  ];

  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
